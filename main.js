const { app, BrowserWindow, WebContentsView } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  const view = new WebContentsView({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.setContentView(view);

  // Change URL here
  view.webContents.loadURL('https://www.github.com');

  // No scrollbar
  view.webContents.on('dom-ready', () => {
    view.webContents.insertCSS(`
      ::-webkit-scrollbar {
        display: none;
      }
      html {
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      body {
        overflow: auto;
      }
    `);
  });

  // Open DevTools in dev environement
  if (process.env.NODE_ENV === 'development') {
    view.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

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