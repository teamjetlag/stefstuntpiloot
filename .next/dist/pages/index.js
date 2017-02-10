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

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HOST = location.origin.replace(/^http/, 'ws');
var socket = (0, _socket2.default)(HOST);

console.log('HOST: ' + HOST);

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'emitSceneData',
    value: function emitSceneData(event) {
      console.log('Scene was clicked');
      console.log(event);

      socket.emit('sceneClicked', {
        data: {
          event: 'Scene clicked',
          timeStamp: Date.now()
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      socket.on('hello', function (data) {
        console.log(data);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('script', { src: 'https://aframe.io/releases/0.4.0/aframe.min.js' })), _react2.default.createElement('a-scene', { physics: 'debug: true', id: 'thescene', onClick: this.emitSceneData }, _react2.default.createElement('a-plane', { 'static-body': true, position: '0 0 -8', rotation: '-90 0 0', width: '10', height: '10', color: '#7BC8A4' }), _react2.default.createElement('a-entity', { 'dynamic-body': 'shape: box', id: 'lucifer', position: '0 0.5 -5', rotation: '0 0 0', color: '#4CC3D9', depth: '0.5', heigt: '0.5', width: '5' }, _react2.default.createElement('a-animation', {
        attribute: 'rotation',
        dur: '10000',
        fill: 'forwards',
        easing: 'linear',
        to: '0 360 0',
        repeat: 'indefinite'
      }), _react2.default.createElement('a-cylinder', { id: 'cylinder', position: '0 0 0' }), _react2.default.createElement('a-entity', { id: 'move', ref: this.test }, _react2.default.createElement('a-box', { id: 'hefboom', position: '2 0.5 0', rotation: '0 0 0', color: '#4CC3D9', depth: '0.5', height: '0.5', width: '4' }), _react2.default.createElement('a-sphere', { id: 'stef', position: '4 0.5 0', radius: '0.75', color: '#EF2D5E' }), _react2.default.createElement('a-animation', {
        id: 'genius',
        attribute: 'rotation',
        begin: 'up',
        dur: '1000',
        direction: 'alternate',
        fill: 'forwards',
        to: '0 0 65',
        repeat: '1'
      })))));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;