import { fileURLToPath } from "url"
import { join, dirname } from "path"
import { app, nativeImage, ipcMain, screen, BrowserWindow, Menu, Tray } from "electron"
// import { Store } from "./utils/store"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

process.env.DIST = join(__dirname, "../dist")
process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST, "../src/public")

// const store = new Store(app.getPath("userData"))

let win: BrowserWindow | null
// Here, you can also use other preload
const preload = join(__dirname, "./preload.js")
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const url = process.env.VITE_DEV_SERVER_URL

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

ipcMain.on("setMainWindowTop", () => {
  win?.moveTop()
})

function setupLogging() {}

function createNativeImage() {
  // const path = join(process.env.PUBLIC, "/assets/clock-icon.png")
  const path = join(process.env.PUBLIC, "/assets/logo.png")
  console.log("--->", path)
  const image = nativeImage.createFromPath(path)
  image.setTemplateImage(true)
  return image
}

function createApp() {
  setupMainWindow()
  setupLogging()
  const tray = new Tray(createNativeImage())
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

app.whenReady().then(createApp).then(createSuspensionWindow)

let win2 // 悬浮球

function createSuspensionWindow() {
  win2 = new BrowserWindow({
    width: 60,
    height: 60,
    type: "toolbar",
    frame: false,
    resizable: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      preload,
    },
  })
  const { left, top } = {
    left: screen.getPrimaryDisplay().workAreaSize.width - 160,
    top: screen.getPrimaryDisplay().workAreaSize.height - 160,
  }
  win2.setPosition(left, top)

  // win2.loadURL(`页面地址`)
  console.log(url + "#suspension")
  win2.loadURL(url + "#suspension")

  win2.once("ready-to-show", () => {
    win2.show()
  })

  win2.on("close", () => {
    win2 = null
  })
}
