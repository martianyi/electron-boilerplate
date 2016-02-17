"use strict";

const electron = require('electron');
const app = electron.app;  // Module to control application life.
const ipcMain = electron.ipcMain;
const Menu = electron.Menu;
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
const windowStateKeeper = require('./utils/window-state');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != 'darwin') {
        app.quit();
    }
});

function createWindow() {
    // Preserver of the window size and position between app launches.
    var mainWindowState = windowStateKeeper('main', {
        width: 800,
        height: 600
    });

    mainWindow = new BrowserWindow({
        title: "Electron Seed",
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height,
        "min-width": 800,
        "min-height": 600
    });

    if (mainWindowState.isMaximized) {
        mainWindow.maximize();
    }

    mainWindow.loadURL("file://" + __dirname + "/views/index.html");

    // save state before close
    mainWindow.on('close', function () {
        mainWindowState.saveState(mainWindow);
    });

    // defer mainWindow
    mainWindow.on("closed", function () {
        mainWindow = null;
    });

    // open url in default browser
    mainWindow.webContents.on("will-navigate", function (event, url) {
        if (!url.startsWith("file://")) {
            event.preventDefault();
            require("shell").openExternal(url);
        }
    });

    var template = [
        {
            label: 'Seed',
            submenu: [
                {
                    label: 'Services',
                    submenu: []
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Hide',
                    accelerator: 'Command+H',
                    selector: 'hide:'
                },
                {
                    label: 'Hide Others',
                    accelerator: 'Command+Shift+H',
                    selector: 'hideOtherApplications:'
                },
                {
                    label: 'Show All',
                    selector: 'unhideAllApplications:'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Quit',
                    accelerator: 'Command+Q',
                    click: function () {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'View',
            submenu: [
                {
                    label: 'Reload',
                    accelerator: 'Command+R',
                    click: function () {
                        BrowserWindow.getFocusedWindow().reloadIgnoringCache();
                    }
                },
                {
                    label: 'Toggle DevTools',
                    accelerator: 'Alt+Command+I',
                    click: function () {
                        BrowserWindow.getFocusedWindow().toggleDevTools();
                    }
                }
            ]
        },
        {
            label: 'Window',
            submenu: [
                {
                    label: 'Minimize',
                    accelerator: 'Command+M',
                    selector: 'performMiniaturize:'
                },
                {
                    label: 'Close',
                    accelerator: 'Command+W',
                    selector: 'performClose:'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Bring All to Front',
                    selector: 'arrangeInFront:'
                }
            ]
        },
        {
            label: 'Help',
            submenu: []
        }
    ];
    var menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {
    // Create the browser window.
    createWindow();

});

app.on("activate-with-no-open-windows", function () {
    createWindow();
});


