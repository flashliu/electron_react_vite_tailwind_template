import { app, BrowserWindow } from 'electron'
import is_dev from 'electron-is-dev'
import path from 'path'

try {
    require('electron-reloader')(module);
} catch { }

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1024,
        height: 728,
        webPreferences: {
            nativeWindowOpen: true
        },
        backgroundColor: "#2e3440"
    })
    const url = is_dev ? 'http://localhost:3000' : `file://${path.join(__dirname, "../../dist/render/index.html")}`
    mainWindow.loadURL(url)
}

app.whenReady().then(createWindow).catch(console.log)

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

