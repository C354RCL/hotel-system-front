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

  if (app.isPackaged) {
    // Cargar el archivo index.html desde la build en producción
    win.loadFile(path.join(__dirname, 'dist', 'index.html'));
   
    
  } else {
    // En desarrollo, cargar el servidor de Vite
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools();
    console.log('Cargando archivo en:', path.join(__dirname, 'dist', 'index.html'));  // Verifica la ruta

  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
