'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('D:\\Projects\\stefstuntpiloot\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('D:\\Projects\\stefstuntpiloot\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('D:\\Projects\\stefstuntpiloot\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('D:\\Projects\\stefstuntpiloot\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('D:\\Projects\\stefstuntpiloot\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('D:\\Projects\\stefstuntpiloot\\node_modules\\react\\react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('D:\\Projects\\stefstuntpiloot\\node_modules\\next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'socketConnect',
    value: function socketConnect(data) {
      console.log(data);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('script', { src: 'https://cdn.socket.io/socket.io-1.4.5.js' }), _react2.default.createElement('script', null, 'const socket = io.connect(\'http://localhost:3030\'); socket.on(\'hello\', ', this.socketConnect, ');')), 'Welcome to next.js!!!');
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;