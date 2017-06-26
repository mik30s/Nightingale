const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow(window) {
	window = new BrowserWindow({
			width: 800, height: 600 
		});
	window.loadUrl("file://" + __dirname + "/index.html");
	window.on('closed', function(){
		window = null
	});
};

// create window at startup
app.on('ready',() => {createWindow(mainWindow);});

app.on('activate', () => {
	if(mainWindow == null){
		createWindow(mainWindow);
	}
});
