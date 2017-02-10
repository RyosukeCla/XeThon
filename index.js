'use strict';

global.appDir = `./app`;
global.backendDir = `${global.appDir}/backend`;
global.frontendDir = `${global.appDir}/frontend`;
global.modulesDir = `${global.appDir}/modules`;

const electron = require('electron');
const apiCaller = require(`${global.modulesDir}/api_caller`);
const app = electron.app;
const ipcMain = electron.ipcMain;
const BrowserWindow = electron.BrowserWindow;
const ROOT_PATH = `file://${__dirname}`;

app.on("ready", e => {
  const mainWindow = new BrowserWindow(
    {
      width: 800,
      height: 600
    }
  );
  mainWindow.loadURL(`${ROOT_PATH}/index.html`);
  mainWindow.webContents.openDevTools();
  console.log("opened!");
});

app.on("window-all-closed", e => {
  app.quit();
  console.log("closed!");
});

ipcMain.on('asynchronous-message', (event, args) => {
  apiCaller.callApi(args);
});
