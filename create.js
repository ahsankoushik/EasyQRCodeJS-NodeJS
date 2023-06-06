const QRCode = require('./index.js');

// Options
var options = {
	text: "hello world!",
	dotType:"circ",
	gradient:true,
	// backgroundImage: "bg.jpg",
	// backgroundImage: "Solid_white.svg.png"
	// margin:

};

// New instance with options
var qrcode = new QRCode(options);

// Save QRCode image
qrcode.saveImage({
	path: 'hello121.png' // save path
});