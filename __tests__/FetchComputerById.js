var Wompatti = require("../dist/").Wompatti;

var w = new Wompatti({ ip: "localhost", port: 7856 });

w.fetchComputerById(4).then(computer => {
	//console.log("computer2323", computer);
	computer.wakeup();
	console.log("wakeupp", computer);
});