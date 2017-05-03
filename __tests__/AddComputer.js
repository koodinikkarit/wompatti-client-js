var Wompatti = require("../dist/").Wompatti;

var w = new Wompatti({ ip: "localhost", port: 7856 });

w.addComputer({
	name: "Tykityskone",
	mac: "as:dd:gg:we"
}).then(computer => {
	console.log("computer", computer);
});