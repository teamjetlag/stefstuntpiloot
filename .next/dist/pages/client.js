'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/axel/Projects/Capathon/stefstuntpiloot/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/axel/Projects/Capathon/stefstuntpiloot/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/axel/Projects/Capathon/stefstuntpiloot/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/axel/Projects/Capathon/stefstuntpiloot/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/axel/Projects/Capathon/stefstuntpiloot/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/axel/Projects/Capathon/stefstuntpiloot/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _style = require('/Users/axel/Projects/Capathon/stefstuntpiloot/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = void 0;
var HOST = 'http://' + _os2.default.hostname();

if (HOST === 'http://localhost') {
  socket = (0, _socket2.default)(HOST + ':3000');
} else {
  socket = (0, _socket2.default)(HOST);
}

console.log('HOST: ' + HOST);

var client = function (_React$Component) {
  (0, _inherits3.default)(client, _React$Component);

  function client() {
    (0, _classCallCheck3.default)(this, client);

    return (0, _possibleConstructorReturn3.default)(this, (client.__proto__ || (0, _getPrototypeOf2.default)(client)).apply(this, arguments));
  }

  (0, _createClass3.default)(client, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      socket.on('hello', function (data) {
        console.log('Hello event received at client.js');
        console.log(data);
      });
    }
  }, {
    key: 'emitEvent',
    value: function emitEvent(eventName) {
      console.log('Emitting event ' + eventName + ' from client.js');

      socket.emit(eventName, {
        data: {
          eventName: eventName,
          timeStamp: Date.now()
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        'data-jsx': 1453724929
      }, _react2.default.createElement(_style2.default, {
        styleId: 1453724929,
        css: '.box[data-jsx="1453724929"] {cursor: pointer;float: left;width: 50%;height:500px;}.stef[data-jsx="1453724929"]{background-image: url(./static/stefstuntpiloot.png);background-repeat: no-repeat;background-size: contain;}.banana[data-jsx="1453724929"]{background-image: url(./static/banana.jpg);background-repeat: no-repeat;background-size: contain;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NsaWVudC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ29CLEFBQ0osNkJBQ1ksZ0JBQ0osWUFDRCxXQUNFLGFBQ2QsQ0FDSyw2QkFDZ0Qsb0RBQ3ZCLDZCQUNKLHlCQUMxQixDQUNPLCtCQUNxQywyQ0FDZCw2QkFDSix5QkFDMUIiLCJmaWxlIjoicGFnZXMvY2xpZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9heGVsL1Byb2plY3RzL0NhcGF0aG9uL3N0ZWZzdHVudHBpbG9vdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IF9KU1hTdHlsZSBmcm9tICdzdHlsZWQtanN4L3N0eWxlJ1xuXG5sZXQgc29ja2V0O1xuY29uc3QgSE9TVCA9IGBodHRwOi8vJHtvcy5ob3N0bmFtZSgpfWA7XG5cbmlmIChIT1NUID09PSAnaHR0cDovL2xvY2FsaG9zdCcpIHtcbiAgc29ja2V0ID0gaW8oYCR7SE9TVH06MzAwMGApO1xufSBlbHNlIHtcbiAgc29ja2V0ID0gaW8oSE9TVCk7XG59XG5cbmNvbnNvbGUubG9nKGBIT1NUOiAke0hPU1R9YCk7XG5cbmNsYXNzIGNsaWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHNvY2tldC5vbignaGVsbG8nLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0hlbGxvIGV2ZW50IHJlY2VpdmVkIGF0IGNsaWVudC5qcycpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBlbWl0RXZlbnQoZXZlbnROYW1lKSB7XG4gICAgY29uc29sZS5sb2coYEVtaXR0aW5nIGV2ZW50ICR7ZXZlbnROYW1lfSBmcm9tIGNsaWVudC5qc2ApO1xuXG4gICAgc29ja2V0LmVtaXQoZXZlbnROYW1lLCB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGV2ZW50TmFtZSxcbiAgICAgICAgdGltZVN0YW1wOiBEYXRlLm5vdygpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmJveCB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6NTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGVme1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vc3RhdGljL3N0ZWZzdHVudHBpbG9vdC5wbmcpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbmFuYXtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3N0YXRpYy9iYW5hbmEuanBnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IHN0ZWZcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmVtaXRFdmVudCgnc3R1bnRFdmVudCcpfT5cbiAgICAgICAgICA8aW1nIHNyYz1cIlwiIC8+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IGJhbmFuYVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuZW1pdEV2ZW50KCdiYW5hbmFFdmVudCcpfT5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xuIl19 */\n/*@ sourceURL=pages/client.js?entry */'
      }), _react2.default.createElement('div', { className: 'box stef', onClick: function onClick() {
          return _this2.emitEvent('stuntEvent');
        }, 'data-jsx': 1453724929
      }, _react2.default.createElement('img', { src: '', 'data-jsx': 1453724929
      })), _react2.default.createElement('div', { className: 'box banana', onClick: function onClick() {
          return _this2.emitEvent('bananaEvent');
        }, 'data-jsx': 1453724929
      }));
    }
  }]);

  return client;
}(_react2.default.Component);

exports.default = client;