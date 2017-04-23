var Wompatti = require("../dist/").Wompatti;

var w = new Wompatti({ ip: "localhost", port: 7856 });

w.wakeup({
	computerId: 50
}).then((res) => {

})