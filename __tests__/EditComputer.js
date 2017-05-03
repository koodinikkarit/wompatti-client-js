var Wompatti = require("../dist/").Wompatti;

var w = new Wompatti({ ip: "localhost", port: 7856 });

w.editComputer({
	id: 4,
	name: "makka",
	mac: "nakki"
}).then(computer => {
	console.log("computer");
});