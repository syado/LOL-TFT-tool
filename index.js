const { app, BrowserWindow, shell, ipcMain } = require("electron")
var path = require('path')


app.on("ready", () => {
  let win = new BrowserWindow({
    width: 84,
    height: 42,
    transparent: true,
    frame: false,
    titleBarStyle: "hidden",
    fullscreenable: false,
    fullscreen: false,
  })
  win.loadURL(`file://${__dirname}/index.html`)
  win.setAlwaysOnTop(true);
  win.setIgnoreMouseEvents(false);
  win.on('closed', () => { win = null; })
  ipcMain.on('resize', (e, x, y) => {
    win.setSize(x, y)
  })
})