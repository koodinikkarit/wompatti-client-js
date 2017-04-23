"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _grpc = require("grpc");

var _grpc2 = _interopRequireDefault(_grpc);

var _Computer = require("./Computer");

var _Computer2 = _interopRequireDefault(_Computer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// console.log(__dirname);

// fs.readFile(__dirname + "/wompatti/wompatti_service.proto", 'utf8', (err, data) => {
// 	console.log(data);
// });

var wompattiSerivce = _grpc2.default.load(__dirname + "/wompatti/wompatti_service.proto").WompattiService;

var _class = function () {
	function _class(_ref) {
		var ip = _ref.ip,
		    port = _ref.port;

		_classCallCheck(this, _class);

		this.client = new wompattiSerivce.Wompatti(ip + ":" + port, _grpc2.default.credentials.createInsecure());
	}

	_createClass(_class, [{
		key: "addComputer",
		value: function addComputer(_ref2) {
			var _this = this;

			var name = _ref2.name,
			    mac = _ref2.mac;

			return new Promise(function (resolve, reject) {
				_this.client.addComputer({
					name: name,
					mac: mac
				}, function (error, computer) {
					resolve(new _Computer2.default(_this.client, computer));
				});
			});
		}
	}, {
		key: "fetchComputerById",
		value: function fetchComputerById(_ref3) {
			var _this2 = this;

			var id = _ref3.id;

			return new Promise(function (resolve, reject) {
				_this2.client.fetchComputerById({
					id: id
				}, function (error, computer) {
					resolve(new _Computer2.default(_this2.client, computer));
				});
			});
		}
	}, {
		key: "fetchComputers",
		value: function fetchComputers(_ref4) {
			var _this3 = this;

			var offset = _ref4.offset,
			    limit = _ref4.limit;

			return new Promise(function (resolve, reject) {
				var call = _this3.client.fetchComputers({
					offset: offset,
					limit: limit
				});

				var computers = [];

				call.on("data", function (computer) {
					computers.push(new _Computer2.default(_this3.client, computer));
				});

				call.on("end", function () {
					resolve(computers);
				});
			});
		}
	}, {
		key: "wakeup",
		value: function wakeup(_ref5) {
			var _this4 = this;

			var computerId = _ref5.computerId;

			return new Promise(function (resolve, reject) {
				_this4.client.wakeup({
					computerId: computerId
				}, function (error, computer) {
					resolve(new _Computer2.default(_this4.client, computer));
				});
			});
		}
	}]);

	return _class;
}();

exports.default = _class;