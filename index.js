const { app, BrowserWindow, shell, ipcMain, session } = require("electron")
var path = require('path')


app.on("ready", () => {
  let win = new BrowserWindow({
    width: 42,
    height: 42,
    transparent: true,
    frame: false,
    titleBarStyle: "hidden",
    fullscreenable: false,
    fullscreen: false,
  })
  // win.loadURL(`file://${__dirname}/docs/index.html`);
  win.loadURL(`http://github.syado.net/LOL-TFT-tool/index.html`);
  win.setAlwaysOnTop(true);
  win.setIgnoreMouseEvents(false);
  ipcMain.on('resize', (e, x, y) => {
    win.setSize(x, y)
  })
  win.on('closed', () => {
    session.defaultSession.clearCache(() => {});
    win = null; 
    app.quit();
  })
})