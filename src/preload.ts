import { contextBridge, ipcRenderer } from "electron";

const worker = {
  startWorker: () => ipcRenderer.invoke("worker"),
};

contextBridge.exposeInMainWorld("worker", worker);
