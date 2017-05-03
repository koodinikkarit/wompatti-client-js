"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
	function _class(client, _ref) {
		var id = _ref.id,
		    name = _ref.name,
		    mac = _ref.mac;

		_classCallCheck(this, _class);

		this._id = id;
		this._name = name;
		this._mac = mac;
		this.client = client;
	}

	_createClass(_class, [{
		key: "wakeup",
		value: function wakeup() {
			var _this = this;

			return new Promise(function (resolve, reject) {
				_this.client.wakeup({
					computerId: _this.id
				}, function (error, res) {});
			});
		}
	}, {
		key: "id",
		get: function get() {
			return this._id;
		}
	}, {
		key: "name",
		get: function get() {
			return this._name;
		}
	}, {
		key: "mac",
		get: function get() {
			return this._mac;
		}
	}]);

	return _class;
}();

exports.default = _class;