import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

 if (app.isPackaged) {
    // Cargar la build de Vite en modo producción
    win.loadFile(path.join(__dirname, 'dist', 'index.html'));
 } else {
    // Cargar el servidor de Vite en modo desarrollo
    win.loadURL('http://localhost:5173');
    win.webContents.openDevTools();
 }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
