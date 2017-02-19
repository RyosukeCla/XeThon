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
      height: 600,
      minWidth: 600,
      minHeight: 300
    }
  );
  mainWindow.loadURL(`${ROOT_PATH}/index.html`);

  BrowserWindow.addDevToolsExtension("/Users/ryosukesuzuki/Library/Application\ Support/Google/Chrome/Profile\ 1/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.0.12_0");

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
