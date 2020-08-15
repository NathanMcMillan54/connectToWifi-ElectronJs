const { app, BrowserWindow} = require('electron');

app.whenReady().then(wifiWindow);

function wifiWindow(){
    let wifi = new BrowserWindow({
        fullscreen: true,
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    wifi.loadFile('index.html');
    wifi.show();
}

exports.wifiWindow = wifiWindow;
