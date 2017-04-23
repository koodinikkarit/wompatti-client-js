
var Wompatti = require("../dist/").Wompatti;

var w = new Wompatti({ ip: "localhost", port: 7856 });

// w.addComputer({
// 	name: "Tykkikone"
// });

w.fetchComputers({

}).then((computers) => {
	console.log("com", computers);
});