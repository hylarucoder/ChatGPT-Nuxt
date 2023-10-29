import { contextBridge, ipcRenderer } from "electron"

console.log("---- electron/preload.ts ----")

export const electronBridge = {
  setMainWindowTop: () => ipcRenderer.send("setMainWindowTop"),
  versions: {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
  },
}

export type ElectronBridge = typeof electronBridge

contextBridge.exposeInMainWorld("electron", electronBridge)
