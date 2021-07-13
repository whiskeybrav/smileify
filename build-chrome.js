const spawn = require('child_process').spawn;

const files = [
	"icons",
	"manifest.json",
	"smileify.js",
	"smileify.css"
]

var zip = spawn('zip', ['-r', 'ext.zip', ...files]);

zip.on('exit', function (code) {
	if (code !== 0) {
		console.log('zip process exited with code ' + code);
	} else {
		console.log('success')
	}
});