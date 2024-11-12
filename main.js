import path from 'path';
import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  //if (app.isPackaged) {
    // Cargar el archivo index.html desde la build en producción
    win.loadFile(path.join(__dirname, 'dist', 'index.html'));
    console.log('Cargando archivo en:', path.join(__dirname, 'dist', 'index.html'));  // Verifica la ruta

    win.webContents.openDevTools();
  //} else {
    // En desarrollo, cargar el servidor de Vite
    //win.loadURL('http://localhost:5173');
  //}
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
