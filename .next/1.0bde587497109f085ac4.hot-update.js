webpackHotUpdate(1,{

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(17);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(24);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(23);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(134);

var _head2 = _interopRequireDefault(_head);

var _socket = __webpack_require__(606);

var _socket2 = _interopRequireDefault(_socket);

var _os = __webpack_require__(500);

var _os2 = _interopRequireDefault(_os);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = void 0;
var HOST = 'http://' + _os2.default.hostname();

if (HOST === 'http://localhost') {
  socket = (0, _socket2.default)(HOST + ':3000');
} else {
  socket = (0, _socket2.default)(HOST);
}

console.log('HOST: ' + HOST);

socket.on('sceneUpdate', function (data) {
  console.log('Scene update received from server to client');
  console.log(data);
});

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
    key: 'handleData',
    value: function handleData(data) {
      console.log('Websocket data');
      console.log(data);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('script', { src: '/static/aframe.min.js' })), _react2.default.createElement('a-scene', { physics: 'debug: true', id: 'thescene', onClick: this.emitSceneData }, _react2.default.createElement('a-plane', { 'static-body': true, position: '0 0 -8', rotation: '-90 0 0', width: '10', height: '10', color: '#7BC8A4' }), _react2.default.createElement('a-entity', { 'dynamic-body': 'shape: box', id: 'lucifer', position: '0 0.5 -5', rotation: '0 0 0', color: '#4CC3D9', depth: '0.5', heigt: '0.5', width: '5' }, _react2.default.createElement('a-animation', {
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

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\Projects\\stefstuntpiloot\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Projects\\stefstuntpiloot\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(63)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz85YmMzYTExIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVQLElBQUksY0FBSjtBQUNBLElBQU0sbUJBQWlCLGFBQUc7O0FBRTFCLElBQUksU0FBUyxvQkFDWDtXQUFTLHNCQUFNLE9BQ2hCO0FBRkQsT0FHRTtXQUFTLHNCQUNWOzs7QUFFRCxRQUFRLGVBQWE7O0FBRXJCLE9BQU8sR0FBRyxlQUFlLFVBQUMsTUFDeEI7VUFBUSxJQUNSO1VBQVEsSUFDVDtBQUhEOztJQUtNOzs7Ozs7Ozs7OztrQ0FDVSxPQUNaO2NBQVEsSUFDUjtjQUFRLElBRVI7O2FBQU8sS0FBSzs7aUJBR1I7cUJBQVcsS0FHaEI7QUFKSztBQURGOzs7O3dDQVFGO2FBQU8sR0FBRyxTQUFTLFVBQUMsTUFDbEI7Z0JBQVEsSUFDVDtBQUNGOzs7OytCQUVVLE1BQ1Q7Y0FBUSxJQUNSO2NBQVEsSUFDVDs7Ozs2QkFHQzs2QkFDRSxxQkFDRSxzQkFBQyw4QkFDQyxtREFDQSwwREFBTSxNQUFLLFlBQVcsU0FDdEIsc0ZBQVEsS0FFVix3RUFBUyxTQUFRLGVBQWMsSUFBRyxZQUFXLFNBQVMsS0FDcEQsNERBQVMsZUFBVCxNQUFxQixVQUFTLFVBQVMsVUFBUyxXQUFVLE9BQU0sTUFBSyxRQUFPLE1BQUssT0FDakYsMERBQVUsZ0JBQWEsY0FBYSxJQUFHLFdBQVUsVUFBUyxZQUFXLFVBQVMsU0FBUSxPQUFNLFdBQVUsT0FBTSxPQUFNLE9BQU0sT0FBTSxPQUM1SDttQkFFRTthQUNBO2NBQ0E7Z0JBQ0E7WUFDQTtnQkFHRjtBQVJFLHdEQVFVLElBQUcsWUFBVyxVQUMxQix3REFBVSxJQUFHLFFBQU8sS0FBSyxLQUN2QixpREFBTyxJQUFHLFdBQVUsVUFBUyxXQUFVLFVBQVMsU0FBUSxPQUFNLFdBQVUsT0FBTSxPQUFNLFFBQU8sT0FBTSxPQUVqRyxvREFBVSxJQUFHLFFBQU8sVUFBUyxXQUFVLFFBQU8sUUFBTyxPQUVyRDtZQUVFO21CQUNBO2VBQ0E7YUFDQTttQkFDQTtjQUNBO1lBQ0E7Z0JBUWI7QUFmYSxXQXpCVjs7Ozs7RUExQmMsZ0JBcUVwQjs7a0JBQWUsTSIsImZpbGUiOiIxLjBiZGU1ODc0OTcxMDlmMDg1YWM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBvcyBmcm9tICdvcyc7XG5cbmxldCBzb2NrZXQ7XG5jb25zdCBIT1NUID0gYGh0dHA6Ly8ke29zLmhvc3RuYW1lKCl9YDtcblxuaWYgKEhPU1QgPT09ICdodHRwOi8vbG9jYWxob3N0Jykge1xuICBzb2NrZXQgPSBpbyhgJHtIT1NUfTozMDAwYCk7XG59IGVsc2Uge1xuICBzb2NrZXQgPSBpbyhIT1NUKTtcbn1cblxuY29uc29sZS5sb2coYEhPU1Q6ICR7SE9TVH1gKTtcblxuc29ja2V0Lm9uKCdzY2VuZVVwZGF0ZScsIChkYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdTY2VuZSB1cGRhdGUgcmVjZWl2ZWQgZnJvbSBzZXJ2ZXIgdG8gY2xpZW50Jyk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufSk7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZW1pdFNjZW5lRGF0YShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdTY2VuZSB3YXMgY2xpY2tlZCcpO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcblxuICAgIHNvY2tldC5lbWl0KCdzY2VuZUNsaWNrZWQnLCB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGV2ZW50OiAnU2NlbmUgY2xpY2tlZCcsXG4gICAgICAgIHRpbWVTdGFtcDogRGF0ZS5ub3coKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc29ja2V0Lm9uKCdoZWxsbycsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURhdGEoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgZGF0YScpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+TXkgcGFnZSB0aXRsZTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL3N0YXRpYy9hZnJhbWUubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGEtc2NlbmUgcGh5c2ljcz1cImRlYnVnOiB0cnVlXCIgaWQ9XCJ0aGVzY2VuZVwiIG9uQ2xpY2s9e3RoaXMuZW1pdFNjZW5lRGF0YX0+XG4gICAgICAgICAgPGEtcGxhbmUgc3RhdGljLWJvZHkgcG9zaXRpb249XCIwIDAgLThcIiByb3RhdGlvbj1cIi05MCAwIDBcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiBjb2xvcj1cIiM3QkM4QTRcIj48L2EtcGxhbmU+XG4gICAgICAgICAgPGEtZW50aXR5IGR5bmFtaWMtYm9keT1cInNoYXBlOiBib3hcIiBpZD1cImx1Y2lmZXJcIiBwb3NpdGlvbj1cIjAgMC41IC01XCIgcm90YXRpb249XCIwIDAgMFwiIGNvbG9yPVwiIzRDQzNEOVwiIGRlcHRoPVwiMC41XCIgaGVpZ3Q9XCIwLjVcIiB3aWR0aD1cIjVcIj5cbiAgICAgICAgICAgIDxhLWFuaW1hdGlvblxuICAgICAgICAgICAgICBhdHRyaWJ1dGU9XCJyb3RhdGlvblwiXG4gICAgICAgICAgICAgIGR1cj1cIjEwMDAwXCJcbiAgICAgICAgICAgICAgZmlsbD1cImZvcndhcmRzXCJcbiAgICAgICAgICAgICAgZWFzaW5nPVwibGluZWFyXCJcbiAgICAgICAgICAgICAgdG89XCIwIDM2MCAwXCJcbiAgICAgICAgICAgICAgcmVwZWF0PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2EtYW5pbWF0aW9uPlxuICAgICAgICAgICAgPGEtY3lsaW5kZXIgaWQ9XCJjeWxpbmRlclwiIHBvc2l0aW9uPVwiMCAwIDBcIj48L2EtY3lsaW5kZXI+XG4gICAgICAgICAgICA8YS1lbnRpdHkgaWQ9XCJtb3ZlXCIgcmVmPXt0aGlzLnRlc3R9PlxuICAgICAgICAgICAgICA8YS1ib3ggaWQ9XCJoZWZib29tXCIgcG9zaXRpb249XCIyIDAuNSAwXCIgcm90YXRpb249XCIwIDAgMFwiIGNvbG9yPVwiIzRDQzNEOVwiIGRlcHRoPVwiMC41XCIgaGVpZ2h0PVwiMC41XCIgd2lkdGg9XCI0XCI+XG4gICAgICAgICAgICAgIDwvYS1ib3g+XG4gICAgICAgICAgICAgIDxhLXNwaGVyZSBpZD1cInN0ZWZcIiBwb3NpdGlvbj1cIjQgMC41IDBcIiByYWRpdXM9XCIwLjc1XCIgY29sb3I9XCIjRUYyRDVFXCI+XG4gICAgICAgICAgICAgIDwvYS1zcGhlcmU+XG4gICAgICAgICAgICAgIDxhLWFuaW1hdGlvblxuICAgICAgICAgICAgICAgIGlkPVwiZ2VuaXVzXCJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGU9XCJyb3RhdGlvblwiXG4gICAgICAgICAgICAgICAgYmVnaW49XCJ1cFwiXG4gICAgICAgICAgICAgICAgZHVyPVwiMTAwMFwiXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwiYWx0ZXJuYXRlXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiZm9yd2FyZHNcIlxuICAgICAgICAgICAgICAgIHRvPVwiMCAwIDY1XCJcbiAgICAgICAgICAgICAgICByZXBlYXQ9XCIxXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2EtYW5pbWF0aW9uPlxuICAgICAgICAgICAgPC9hLWVudGl0eT5cbiAgICAgICAgICA8L2EtZW50aXR5PlxuICAgICAgICA8L2Etc2NlbmU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9