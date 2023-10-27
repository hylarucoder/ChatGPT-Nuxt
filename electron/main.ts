import { join } from "path"
import { app, BrowserWindow, Menu, Tray } from "electron"

process.env.DIST = join(__dirname, "../dist")
process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST, "../public")

let win: BrowserWindow | null
// Here, you can also use other preload
const preload = join(__dirname, "./preload.js")
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const url = process.env["VITE_DEV_SERVER_URL"]

function setupMainWindow() {
  win = new BrowserWindow({
    icon: join(process.env.PUBLIC, "logo.svg"),
    titleBarStyle: "hidden",
    width: 1280,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      preload,
    },
  })

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString())
  })

  if (url) {
    win.loadURL(url)
  } else {
    win.loadFile(join(process.env.DIST, "index.html"))
  }
}

function setupLogging() {}

function createApp() {
  setupMainWindow()
  setupLogging()
  const tray = new Tray(join(process.env.PUBLIC, "logo.svg"))
  const contextMenu = Menu.buildFromTemplate([
    { label: "Item1", type: "radio" },
    { label: "Item2", type: "radio" },
    { label: "Item3", type: "radio", checked: true },
    { label: "Item4", type: "radio" },
  ])
  tray.setToolTip("This is my application.")
  tray.setContextMenu(contextMenu)
}

app.on("window-all-closed", () => {
  win = null
})

app.whenReady().then(createApp)
