# Electron WebContentView
A basic Elecron webContentView template to create an appliaction that displays a website.

Is implemented only a function to hide the scrollbars.

- [Electron docs](https://www.electronjs.org/docs/latest/)
- [Electron GitHub](https://github.com/electron/electron/)


## Usage
To run this repository you'll need [Node.js](https://nodejs.org/en/download/).

Install dependencies :
```
npm install
```

Run app :
```
npm start
```

## Configuration

You just need to change URL in main.js (and delete the part // No scrollbar if you want scrollbar)*

```
  // Change URL here
  view.webContents.loadURL('https://www.github.com');

  // No scrollbar
  view.webContents.on('dom-ready', () => {
    ...
```
