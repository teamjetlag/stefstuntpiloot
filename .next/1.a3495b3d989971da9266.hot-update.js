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

var _impulse = __webpack_require__(707);

var _impulse2 = _interopRequireDefault(_impulse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// physics.registerAll();

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
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
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
    }
  }, {
    key: 'handleSceneClick',
    value: function handleSceneClick(event) {
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

      socket.on('sceneUpdate', function (data) {
        console.log('Scene update received from server to client');
        console.log(data);

        // TODO: Apply impulse
        // applyImpulse();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('script', { src: '/static/aframe.min.js' }), _react2.default.createElement('script', { src: '/static/aframe-physics-system.js' })), _react2.default.createElement('a-scene', { physics: 'debug: true; friction: 0.002;', 'physics-world': '0 -9.8 0' }, _react2.default.createElement('a-entity', { rotation: '-45 0 0', position: '0 5 8' }, _react2.default.createElement('a-camera', null)), _react2.default.createElement('a-plane', { 'static-body': true, position: '0 -1 0', rotation: '-90 0 0', width: '20', height: '20', color: '#7BC8A4' }), _react2.default.createElement('a-cylinder', { id: 'boxA', color: 'white', 'static-body': true, position: '0 0 0', width: '0.5', height: '1', depth: '0.5' }), _react2.default.createElement('a-sphere', { id: 'boxB', color: 'red', 'dynamic-body': 'mass: 50', position: '0 -5 0.2', radius: '0.5' }), _react2.default.createElement('a-entity', { position: '0.85 -0.35 0' }, _react2.default.createElement('a-entity', { position: '2 -2 0', rotation: '0 0 25' }, _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 -0.1 0', depth: '0.24', height: '0.8', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 -0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '2.5 0 0', depth: '0.24', height: '1.3', width: '0.1', color: 'yellow' })), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '4.5 0.5 0', color: 'green', height: '0.1', radius: '0.4', rotation: '0 90 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '5   1   0', color: 'blue', height: '0.1', radius: '0.4', rotation: '0 90 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '5.5 1.5 0', color: 'orange', height: '0.1', radius: '0.4', rotation: '0 90 90' })), _react2.default.createElement('a-entity', { position: '-0.85 -0.35 0' }, _react2.default.createElement('a-entity', { position: '-2 -2 0', rotation: '0 0 -25' }, _react2.default.createElement('a-box', { 'static-body': true, position: '-4 0 0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '-4 -0.1 0', depth: '0.24', height: '0.8', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '-4 0 -0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '-2.5 0 0', depth: '0.24', height: '1.3', width: '0.1', color: 'yellow' })), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '-4.5 0.5 0', color: 'green', height: '0.1', radius: '0.4', rotation: '0 90 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '-5   1   0', color: 'blue', height: '0.1', radius: '0.4', rotation: '0 90 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '-5.5 1.5 0', color: 'orange', height: '0.1', radius: '0.4', rotation: '0 90 90' })), _react2.default.createElement('a-entity', { position: '0 -0.35 -0.85' }, _react2.default.createElement('a-entity', { position: '0 -2 -2', rotation: '0 90 25' }, _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 -0.1 0', depth: '0.24', height: '0.8', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 -0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '2.5 0 0', depth: '0.24', height: '1.3', width: '0.1', color: 'yellow' })), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '0 0.5 -4.5', color: 'green', height: '0.1', radius: '0.4', rotation: '0 0 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '0 1   -5', color: 'blue', height: '0.1', radius: '0.4', rotation: '0 0 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '0 1.5 -5.5', color: 'orange', height: '0.1', radius: '0.4', rotation: '0 0 90' })), _react2.default.createElement('a-entity', { position: '0 -0.35 0.85' }, _react2.default.createElement('a-entity', { position: '0 -2 2', rotation: '0 -90 25' }, _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 -0.1 0', depth: '0.24', height: '0.8', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 -0.12', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '2.5 0 0', depth: '0.24', height: '1.3', width: '0.1', color: 'yellow' })), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '0 0.5 4.5', color: 'green', height: '0.1', radius: '0.4', rotation: '0 0 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '0 1   5', color: 'blue', height: '0.1', radius: '0.4', rotation: '0 0 90' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, mass: '2', position: '0 1.5 5.5', color: 'orange', height: '0.1', radius: '0.4', rotation: '0 0 90' }))), _react2.default.createElement('script', { src: '/static/script.js' }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz83ODIzODljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDa0I7Ozs7OztBQUV6Qjs7QUFFQSxJQUFJLGNBQUo7QUFDQSxJQUFNLG1CQUFpQixhQUFHOztBQUUxQixJQUFJLFNBQVMsb0JBQ1g7V0FBUyxzQkFBTSxPQUNoQjtBQUZELE9BR0U7V0FBUyxzQkFDVjs7O0FBRUQsUUFBUSxlQUFhOztBQUVyQjtBQUNBLElBQUksWUFBSjs7SUFFTTs7Ozs7Ozs7Ozs7d0NBRUY7YUFBTyxHQUFHLFNBQVMsVUFBQyxNQUNsQjtnQkFBUSxJQUNUO0FBRUQ7O2FBQU8sR0FBRyxlQUFlLFVBQUMsTUFDeEI7Z0JBQVEsSUFDUjtnQkFBUSxJQUVSOztBQUNBOytCQUNEO0FBQ0Y7Ozs7cUNBRWdCLE9BQ2Y7Y0FBUSxJQUNSO2NBQVEsSUFFUjs7YUFBTyxLQUFLOztpQkFHUjtxQkFBVyxLQUdoQjtBQUpLO0FBREY7Ozs7d0NBUUY7YUFBTyxHQUFHLFNBQVMsVUFBQyxNQUNsQjtnQkFBUSxJQUNUO0FBRUQ7O2FBQU8sR0FBRyxlQUFlLFVBQUMsTUFDeEI7Z0JBQVEsSUFDUjtnQkFBUSxJQUVSOztBQUNBO0FBQ0Q7QUFDRjs7Ozs2QkFHQzthQUNFLHFDQUNFLHNCQUFDLDhCQUNDLG1EQUNBLDBEQUFNLE1BQUssWUFBVyxTQUN0QixzRkFBUSxLQUNSLHNFQUFRLEtBRVosbUZBQVMsU0FBUSxpQ0FBZ0MsaUJBQ2pELDBEQUFVLFVBQVMsV0FBVSxVQUM3QixxREFFQSxtREFBUyxlQUFULE1BQXFCLFVBQVMsVUFBUyxVQUFTLFdBQVUsT0FBTSxNQUFLLFFBQU8sTUFBSyxPQUNqRiw0REFBWSxJQUFHLFFBQU8sT0FBTSxTQUFRLGVBQXBDLE1BQWdELFVBQVMsU0FBUSxPQUFNLE9BQU0sUUFBTyxLQUFJLE9BQ3hGLHNEQUFVLElBQUcs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LGFBQVksT0FBTSxTQUFRLFFBQU8sT0FBTSxRQUFPLE9BQU0sVUFDL0YsMkRBQVksZ0JBQVosTUFBeUIsTUFBSyxLQUFJLFVBQVMsV0FBVSxPQUFNLFFBQU8sUUFBTyxPQUFNLFFBQU8sT0FBTSxVQUM1RiwyREFBWSxnQkFBWixNQUF5QixNQUFLLEtBQUksVUFBUyxhQUFZLE9BQU0sVUFBUyxRQUFPLE9BQU0sUUFBTyxPQUFNLFVBSzlGLHlEQUFRLEtBR2I7Ozs7O0VBaEhpQixnQkFtSHBCOztrQkFBZSxNIiwiZmlsZSI6IjEuYTM0OTViM2Q5ODk5NzFkYTkyNjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCBhcHBseUltcHVsc2UgZnJvbSAnLi8uLi9zdGF0aWMvaW1wdWxzZSc7XG5cbi8vIHBoeXNpY3MucmVnaXN0ZXJBbGwoKTtcblxubGV0IHNvY2tldDtcbmNvbnN0IEhPU1QgPSBgaHR0cDovLyR7b3MuaG9zdG5hbWUoKX1gO1xuXG5pZiAoSE9TVCA9PT0gJ2h0dHA6Ly9sb2NhbGhvc3QnKSB7XG4gIHNvY2tldCA9IGlvKGAke0hPU1R9OjMwMDBgKTtcbn0gZWxzZSB7XG4gIHNvY2tldCA9IGlvKEhPU1QpO1xufVxuXG5jb25zb2xlLmxvZyhgSE9TVDogJHtIT1NUfWApO1xuXG4vLyBJbnN0YW50aWF0ZSB2YXJpYWJsZXMgdXNlZCBmb3IgcmVmc1xubGV0IGJveEI7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc29ja2V0Lm9uKCdoZWxsbycsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbignc2NlbmVVcGRhdGUnLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1NjZW5lIHVwZGF0ZSByZWNlaXZlZCBmcm9tIHNlcnZlciB0byBjbGllbnQnKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAvLyBBcHBseSBpbXB1bHNlXG4gICAgICBhcHBseUltcHVsc2UoYm94Qik7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTY2VuZUNsaWNrKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ1NjZW5lIHdhcyBjbGlja2VkJyk7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuXG4gICAgc29ja2V0LmVtaXQoJ3NjZW5lQ2xpY2tlZCcsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZXZlbnQ6ICdTY2VuZSBjbGlja2VkJyxcbiAgICAgICAgdGltZVN0YW1wOiBEYXRlLm5vdygpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzb2NrZXQub24oJ2hlbGxvJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKCdzY2VuZVVwZGF0ZScsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnU2NlbmUgdXBkYXRlIHJlY2VpdmVkIGZyb20gc2VydmVyIHRvIGNsaWVudCcpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgIC8vIFRPRE86IEFwcGx5IGltcHVsc2VcbiAgICAgIC8vIGFwcGx5SW1wdWxzZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+TXkgcGFnZSB0aXRsZTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL3N0YXRpYy9hZnJhbWUubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL2FmcmFtZS1waHlzaWNzLXN5c3RlbS5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8L0hlYWQ+XG4gICAgICA8YS1zY2VuZSBwaHlzaWNzPVwiZGVidWc6IHRydWU7IGZyaWN0aW9uOiAwLjAwMjtcIiBwaHlzaWNzLXdvcmxkPVwiMCAtOS44IDBcIj5cbiAgICAgIDxhLWVudGl0eSByb3RhdGlvbj1cIi00NSAwIDBcIiBwb3NpdGlvbj1cIjAgNSA4XCI+XG4gICAgICA8YS1jYW1lcmE+PC9hLWNhbWVyYT5cbiAgICAgIDwvYS1lbnRpdHk+XG4gICAgICA8YS1wbGFuZSBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjAgLTEgMFwiIHJvdGF0aW9uPVwiLTkwIDAgMFwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIGNvbG9yPVwiIzdCQzhBNFwiPjwvYS1wbGFuZT5cbiAgICAgIDxhLWN5bGluZGVyIGlkPVwiYm94QVwiIGNvbG9yPVwid2hpdGVcIiBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjAgMCAwXCIgd2lkdGg9XCIwLjVcIiBoZWlnaHQ9XCIxXCIgZGVwdGg9XCIwLjVcIj48L2EtY3lsaW5kZXI+XG4gICAgICA8YS1zcGhlcmUgaWQ9XCJib3hCXCIgY29sb3I9XCJyZWRcIiBkeW5hbWljLWJvZHk9XCJtYXNzOiA1MFwiIHBvc2l0aW9uPVwiMCAtNSAwLjJcIiByYWRpdXM9XCIwLjVcIj48L2Etc3BoZXJlPlxuXG5cbiAgICAgIDxhLWVudGl0eSBwb3NpdGlvbj1cIjAuODUgLTAuMzUgMFwiPlxuICAgICAgPGEtZW50aXR5IHBvc2l0aW9uPVwiMiAtMiAwXCIgcm90YXRpb249XCIwIDAgMjVcIj5cbiAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjQgMCAwLjEyXCIgZGVwdGg9XCIwLjFcIiB3aWR0aD1cIjNcIiBjb2xvcj1cInllbGxvd1wiPjwvYS1ib3g+XG4gICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCI0IC0wLjEgMFwiIGRlcHRoPVwiMC4yNFwiIGhlaWdodD1cIjAuOFwiIHdpZHRoPVwiM1wiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjQgMCAtMC4xMlwiIGRlcHRoPVwiMC4xXCIgd2lkdGg9XCIzXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgPGEtYm94IHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiMi41IDAgMFwiIGRlcHRoPVwiMC4yNFwiIGhlaWdodD1cIjEuM1wiIHdpZHRoPVwiMC4xXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgPC9hLWVudGl0eT5cbiAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiNC41IDAuNSAwXCIgY29sb3I9XCJncmVlblwiIGhlaWdodD1cIjAuMVwiIHJhZGl1cz1cIjAuNFwiIHJvdGF0aW9uPVwiMCA5MCA5MFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiNSAgIDEgICAwXCIgY29sb3I9XCJibHVlXCIgaGVpZ2h0PVwiMC4xXCIgcmFkaXVzPVwiMC40XCIgcm90YXRpb249XCIwIDkwIDkwXCI+PC9hLWN5bGluZGVyPlxuICAgICAgPGEtY3lsaW5kZXIgZHluYW1pYy1ib2R5IG1hc3M9XCIyXCIgcG9zaXRpb249XCI1LjUgMS41IDBcIiBjb2xvcj1cIm9yYW5nZVwiIGhlaWdodD1cIjAuMVwiIHJhZGl1cz1cIjAuNFwiIHJvdGF0aW9uPVwiMCA5MCA5MFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgIDwvYS1lbnRpdHk+XG5cbiAgICAgIDxhLWVudGl0eSBwb3NpdGlvbj1cIi0wLjg1IC0wLjM1IDBcIj5cbiAgICAgIDxhLWVudGl0eSBwb3NpdGlvbj1cIi0yIC0yIDBcIiByb3RhdGlvbj1cIjAgMCAtMjVcIj5cbiAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIi00IDAgMC4xMlwiIGRlcHRoPVwiMC4xXCIgd2lkdGg9XCIzXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgPGEtYm94IHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiLTQgLTAuMSAwXCIgZGVwdGg9XCIwLjI0XCIgaGVpZ2h0PVwiMC44XCIgd2lkdGg9XCIzXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgPGEtYm94IHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiLTQgMCAtMC4xMlwiIGRlcHRoPVwiMC4xXCIgd2lkdGg9XCIzXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgPGEtYm94IHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiLTIuNSAwIDBcIiBkZXB0aD1cIjAuMjRcIiBoZWlnaHQ9XCIxLjNcIiB3aWR0aD1cIjAuMVwiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgIDwvYS1lbnRpdHk+XG4gICAgICA8YS1jeWxpbmRlciBkeW5hbWljLWJvZHkgbWFzcz1cIjJcIiBwb3NpdGlvbj1cIi00LjUgMC41IDBcIiBjb2xvcj1cImdyZWVuXCIgaGVpZ2h0PVwiMC4xXCIgcmFkaXVzPVwiMC40XCIgcm90YXRpb249XCIwIDkwIDkwXCI+PC9hLWN5bGluZGVyPlxuICAgICAgPGEtY3lsaW5kZXIgZHluYW1pYy1ib2R5IG1hc3M9XCIyXCIgcG9zaXRpb249XCItNSAgIDEgICAwXCIgY29sb3I9XCJibHVlXCIgaGVpZ2h0PVwiMC4xXCIgcmFkaXVzPVwiMC40XCIgcm90YXRpb249XCIwIDkwIDkwXCI+PC9hLWN5bGluZGVyPlxuICAgICAgPGEtY3lsaW5kZXIgZHluYW1pYy1ib2R5IG1hc3M9XCIyXCIgcG9zaXRpb249XCItNS41IDEuNSAwXCIgY29sb3I9XCJvcmFuZ2VcIiBoZWlnaHQ9XCIwLjFcIiByYWRpdXM9XCIwLjRcIiByb3RhdGlvbj1cIjAgOTAgOTBcIj48L2EtY3lsaW5kZXI+XG4gICAgICA8L2EtZW50aXR5PlxuXG4gICAgICA8YS1lbnRpdHkgcG9zaXRpb249XCIwIC0wLjM1IC0wLjg1XCI+XG4gICAgICA8YS1lbnRpdHkgcG9zaXRpb249XCIwIC0yIC0yXCIgcm90YXRpb249XCIwIDkwIDI1XCI+XG4gICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCI0IDAgMC4xMlwiIGRlcHRoPVwiMC4xXCIgd2lkdGg9XCIzXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgPGEtYm94IHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiNCAtMC4xIDBcIiBkZXB0aD1cIjAuMjRcIiBoZWlnaHQ9XCIwLjhcIiB3aWR0aD1cIjNcIiBjb2xvcj1cInllbGxvd1wiPjwvYS1ib3g+XG4gICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCI0IDAgLTAuMTJcIiBkZXB0aD1cIjAuMVwiIHdpZHRoPVwiM1wiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjIuNSAwIDBcIiBkZXB0aD1cIjAuMjRcIiBoZWlnaHQ9XCIxLjNcIiB3aWR0aD1cIjAuMVwiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgIDwvYS1lbnRpdHk+XG4gICAgICA8YS1jeWxpbmRlciBkeW5hbWljLWJvZHkgbWFzcz1cIjJcIiBwb3NpdGlvbj1cIjAgMC41IC00LjVcIiBjb2xvcj1cImdyZWVuXCIgaGVpZ2h0PVwiMC4xXCIgcmFkaXVzPVwiMC40XCIgcm90YXRpb249XCIwIDAgOTBcIj48L2EtY3lsaW5kZXI+XG4gICAgICA8YS1jeWxpbmRlciBkeW5hbWljLWJvZHkgbWFzcz1cIjJcIiBwb3NpdGlvbj1cIjAgMSAgIC01XCIgY29sb3I9XCJibHVlXCIgaGVpZ2h0PVwiMC4xXCIgcmFkaXVzPVwiMC40XCIgcm90YXRpb249XCIwIDAgOTBcIj48L2EtY3lsaW5kZXI+XG4gICAgICA8YS1jeWxpbmRlciBkeW5hbWljLWJvZHkgbWFzcz1cIjJcIiBwb3NpdGlvbj1cIjAgMS41IC01LjVcIiBjb2xvcj1cIm9yYW5nZVwiIGhlaWdodD1cIjAuMVwiIHJhZGl1cz1cIjAuNFwiIHJvdGF0aW9uPVwiMCAwIDkwXCI+PC9hLWN5bGluZGVyPlxuICAgICAgPC9hLWVudGl0eT5cblxuICAgICAgPGEtZW50aXR5IHBvc2l0aW9uPVwiMCAtMC4zNSAwLjg1XCI+XG4gICAgICA8YS1lbnRpdHkgcG9zaXRpb249XCIwIC0yIDJcIiByb3RhdGlvbj1cIjAgLTkwIDI1XCI+XG4gICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCI0IDAgMC4xMlwiIGRlcHRoPVwiMC4xXCIgd2lkdGg9XCIzXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgPGEtYm94IHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiNCAtMC4xIDBcIiBkZXB0aD1cIjAuMjRcIiBoZWlnaHQ9XCIwLjhcIiB3aWR0aD1cIjNcIiBjb2xvcj1cInllbGxvd1wiPjwvYS1ib3g+XG4gICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCI0IDAgLTAuMTJcIiBkZXB0aD1cIjAuMVwiIHdpZHRoPVwiM1wiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjIuNSAwIDBcIiBkZXB0aD1cIjAuMjRcIiBoZWlnaHQ9XCIxLjNcIiB3aWR0aD1cIjAuMVwiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgIDwvYS1lbnRpdHk+XG4gICAgICA8YS1jeWxpbmRlciBkeW5hbWljLWJvZHkgbWFzcz1cIjJcIiBwb3NpdGlvbj1cIjAgMC41IDQuNVwiIGNvbG9yPVwiZ3JlZW5cIiBoZWlnaHQ9XCIwLjFcIiByYWRpdXM9XCIwLjRcIiByb3RhdGlvbj1cIjAgMCA5MFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiMCAxICAgNVwiIGNvbG9yPVwiYmx1ZVwiIGhlaWdodD1cIjAuMVwiIHJhZGl1cz1cIjAuNFwiIHJvdGF0aW9uPVwiMCAwIDkwXCI+PC9hLWN5bGluZGVyPlxuICAgICAgPGEtY3lsaW5kZXIgZHluYW1pYy1ib2R5IG1hc3M9XCIyXCIgcG9zaXRpb249XCIwIDEuNSA1LjVcIiBjb2xvcj1cIm9yYW5nZVwiIGhlaWdodD1cIjAuMVwiIHJhZGl1cz1cIjAuNFwiIHJvdGF0aW9uPVwiMCAwIDkwXCI+PC9hLWN5bGluZGVyPlxuICAgICAgPC9hLWVudGl0eT5cblxuICAgICAgPC9hLXNjZW5lPlxuXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL3N0YXRpYy9zY3JpcHQuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=