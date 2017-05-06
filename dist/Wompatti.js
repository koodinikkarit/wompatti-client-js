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

var messages = require(__dirname + "/../lib/wompatti/wompatti_service_pb");
var services = require(__dirname + "/../lib/wompatti/wompatti_service_grpc_pb");

//const wompattiSerivce = grpc.load(__dirname + "/../lib/wompatti/wompatti_service_pb").WompattiService;

var _class = function () {
	function _class(_ref) {
		var ip = _ref.ip,
		    port = _ref.port;

		_classCallCheck(this, _class);

		this.client = new services.WompattiClient(ip + ":" + port, _grpc2.default.credentials.createInsecure());
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
				}, function (error, res) {
					resolve(new _Computer2.default(_this.client, res.computer));
				});
			});
		}
	}, {
		key: "editComputer",
		value: function editComputer(_ref3) {
			var _this2 = this;

			var id = _ref3.id,
			    name = _ref3.name,
			    mac = _ref3.mac;

			return new Promise(function (resolve, reject) {
				_this2.client.editComputer({
					id: id,
					name: name,
					mac: mac
				}, function (error, res) {
					resolve(new _Computer2.default(_this2.client, res.computer));
				});
			});
		}
	}, {
		key: "fetchComputerById",
		value: function fetchComputerById(id) {
			var _this3 = this;

			return new Promise(function (resolve, reject) {
				_this3.client.fetchComputerById({
					id: id
				}, function (error, res) {
					resolve(new _Computer2.default(_this3.client, res.computer));
				});
			});
		}
	}, {
		key: "fetchComputers",
		value: function fetchComputers(_ref4) {
			var _this4 = this;

			var offset = _ref4.offset,
			    limit = _ref4.limit;

			return new Promise(function (resolve, reject) {
				var req = new messages.FetchComputersRequest();

				var call = _this4.client.fetchComputers(req);

				var computers = [];

				call.on("data", function (computer) {
					computers.push(new _Computer2.default(_this4.client, {
						id: computer.getId(),
						name: computer.getName(),
						mac: computer.getMac()
					}));
				});

				call.on("end", function () {
					resolve(computers);
				});
			});
		}
	}, {
		key: "wakeup",
		value: function wakeup(computerId) {
			var _this5 = this;

			return new Promise(function (resolve, reject) {
				_this5.client.wakeup({
					computerId: computerId
				}, function (error, computer) {});
			});
		}
	}]);

	return _class;
}();

exports.default = _class;