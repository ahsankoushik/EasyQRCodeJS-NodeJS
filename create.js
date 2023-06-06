const QRCode = require('./index.js');


// const text = "British logistics played a key role in the success of Operation Overlord, the Allied invasion of France in June 1944. The objective of the campaign was to secure a lodgement on the mainland of Europe for further operations. The Allies had to land sufficient forces to overcome the initial opposition and build it";
const text = "hello";
// console.log(text.length);
// Options
var options = {
	width: 1024,
    height: 1024,
	text: text,
	dotType:"line-x",
	// colorDark:"red",
	gradient:true,
	quietZone:10,
	// logo: "instagram.png",
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