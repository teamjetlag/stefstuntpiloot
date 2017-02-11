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

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _impulse = require('./../static/impulse');

var _impulse2 = _interopRequireDefault(_impulse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = void 0;
var HOST = 'http://' + _os2.default.hostname();

if (HOST === 'http://localhost') {
  socket = (0, _socket2.default)(HOST + ':3000');
} else {
  socket = (0, _socket2.default)(HOST);
}

console.log('HOST: ' + HOST);

// Instantiate variables used for refs
var boxB = void 0;

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.newGame = function () {
      socket.emit('newGame');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'handleSceneClick',
    value: function handleSceneClick() {
      console.log('Scene was clicked');

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
      socket.on('sceneUpdate', function (data) {
        console.log('Scene update received from server to client');
        console.log(data);

        // Apply impulse
        (0, _impulse2.default)(boxB);
      });

      socket.on('again', function () {
        location.reload();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('script', { src: '/static/aframe.min.js' }), _react2.default.createElement('script', { src: '/static/aframe-physics-system.js' })), _react2.default.createElement('header', null, _react2.default.createElement('button', { onClick: this.newGame }, 'New Game')), _react2.default.createElement('a-scene', { physics: 'debug: false; friction: 0.002;', 'physics-world': '0 -9.8 0', onClick: this.handleSceneClick }, _react2.default.createElement('a-entity', { rotation: '-45 0 0', position: '0 5 8' }, _react2.default.createElement('a-camera', null)), _react2.default.createElement('a-plane', { 'static-body': true, position: '0 -1 0', rotation: '-90 0 0', width: '20', height: '20', color: '#7BC8A4' }), _react2.default.createElement('a-cylinder', { id: 'boxA', color: 'white', 'static-body': true, position: '0 0 0', width: '0.5', height: '1', depth: '0.5' }), _react2.default.createElement('a-sphere', {
        id: 'boxB',
        color: 'red',
        'dynamic-body': 'mass: 50',
        position: '0 -5 0.2',
        radius: '0.5',
        ref: function ref(boxb) {
          boxB = boxb;
        }
      }), _react2.default.createElement('a-entity', { position: '0.85 -0.35 0' }, _react2.default.createElement('a-entity', { position: '2 -2 0', rotation: '0 0 25' }, _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 -0.1 0', depth: '0.24', height: '0.8', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 -0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '2.5 0 0', depth: '0.24', height: '1.3', width: '0.1', color: 'yellow' })), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '4.5 0.5 0', color: 'green', height: '0.1', radius: '0.4', rotation: '0 90 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '5   1   0', color: 'blue', height: '0.1', radius: '0.4', rotation: '0 90 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '5.5 1.5 0', color: 'orange', height: '0.1', radius: '0.4', rotation: '0 90 90' })), _react2.default.createElement('a-entity', { position: '-0.85 -0.35 0' }, _react2.default.createElement('a-entity', { position: '-2 -2 0', rotation: '0 0 -25' }, _react2.default.createElement('a-box', { 'static-body': true, position: '-4 0 0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '-4 -0.1 0', depth: '0.24', height: '0.8', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '-4 0 -0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '-2.5 0 0', depth: '0.24', height: '1.3', width: '0.1', color: 'yellow' })), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '-4.5 0.5 0', color: 'green', height: '0.1', radius: '0.4', rotation: '0 90 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '-5   1   0', color: 'blue', height: '0.1', radius: '0.4', rotation: '0 90 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '-5.5 1.5 0', color: 'orange', height: '0.1', radius: '0.4', rotation: '0 90 90' })), _react2.default.createElement('a-entity', { position: '0 -0.35 -0.85' }, _react2.default.createElement('a-entity', { position: '0 -2 -2', rotation: '0 90 25' }, _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 -0.1 0', depth: '0.24', height: '0.8', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 -0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '2.5 0 0', depth: '0.24', height: '1.3', width: '0.1', color: 'yellow' })), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '0 0.5 -4.5', color: 'green', height: '0.1', radius: '0.4', rotation: '0 0 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '0 1   -5', color: 'blue', height: '0.1', radius: '0.4', rotation: '0 0 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '0 1.5 -5.5', color: 'orange', height: '0.1', radius: '0.4', rotation: '0 0 90' })), _react2.default.createElement('a-entity', { position: '0 -0.35 0.85' }, _react2.default.createElement('a-entity', { position: '0 -2 2', rotation: '0 -90 25' }, _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 -0.1 0', depth: '0.24', height: '0.8', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 -0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '2.5 0 0', depth: '0.24', height: '1.3', width: '0.1', color: 'yellow' })), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '0 0.5 4.5', color: 'green', height: '0.1', radius: '0.4', rotation: '0 0 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '0 1   5', color: 'blue', height: '0.1', radius: '0.4', rotation: '0 0 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '0 1.5 5.5', color: 'orange', height: '0.1', radius: '0.4', rotation: '0 0 90' }))), _react2.default.createElement('script', { src: '/static/script.js' }));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;