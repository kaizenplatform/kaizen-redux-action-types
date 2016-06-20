'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.async = async;

var _lodash = require('lodash.flattendeep');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Types = function () {
  function Types() {
    var _this = this;

    _classCallCheck(this, Types);

    this.types = {};

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (0, _lodash2.default)(args).forEach(function (type) {
      _this.types[type] = type;
    });
  }

  _createClass(Types, [{
    key: 'get',
    value: function get(key) {
      if (key === null || key === undefined) {
        throw new Error('Calling get() with null or undefined argument');
      }
      if (!(key in this.types)) {
        throw new Error('Action types "' + key + '" is not defined');
      }
      return this.types[key];
    }
  }]);

  return Types;
}();

exports.default = Types;
function async(type) {
  return [type + '_REQUEST', type + '_SUCCESS', type + '_FAILURE'];
}