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

var _socket = __webpack_require__(607);

var _socket2 = _interopRequireDefault(_socket);

var _os = __webpack_require__(500);

var _os2 = _interopRequireDefault(_os);

var _impulse = __webpack_require__(585);

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('script', { src: '/static/aframe.min.js' }), _react2.default.createElement('script', { src: '/static/aframe-physics-system.js' })), _react2.default.createElement('a-scene', { physics: 'debug: false; friction: 0.002;', 'physics-world': '0 -9.8 0', onClick: this.handleSceneClick }, _react2.default.createElement('a-entity', { rotation: '-45 0 0', position: '0 5 8' }, _react2.default.createElement('a-camera', null)), _react2.default.createElement('a-plane', { 'static-body': true, position: '0 -1 0', rotation: '-90 0 0', width: '20', height: '20', color: '#7BC8A4' }), _react2.default.createElement('a-cylinder', { id: 'boxA', color: 'white', 'static-body': true, position: '0 0 0', width: '0.5', height: '1', depth: '0.5' }), _react2.default.createElement('a-sphere', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9hZmE3ODdiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDa0I7Ozs7OztBQUV6QixJQUFJLGNBQUo7QUFDQSxJQUFNLG1CQUFpQixhQUFHOztBQUUxQixJQUFJLFNBQVMsb0JBQ1g7V0FBUyxzQkFBTSxPQUNoQjtBQUZELE9BR0U7V0FBUyxzQkFDVjs7O0FBRUQsUUFBUSxlQUFhOztBQUVyQjtBQUNBLElBQUksWUFBSjs7SUFFTTs7Ozs7Ozs7Ozs7d0NBRUY7YUFBTyxHQUFHLFNBQVMsVUFBQyxNQUNsQjtnQkFBUSxJQUNUO0FBRUQ7O2FBQU8sR0FBRyxlQUFlLFVBQUMsTUFDeEI7Z0JBQVEsSUFDUjtnQkFBUSxJQUVSOztBQUNBOytCQUNEO0FBQ0Y7Ozs7cUNBRWdCLE9BQ2Y7Y0FBUSxJQUNSO2NBQVEsSUFFUjs7YUFBTyxLQUFLOztpQkFHUjtxQkFBVyxLQUdoQjtBQUpLO0FBREY7Ozs7NkJBUUY7YUFDRSxxQ0FDRSxzQkFBQyw4QkFDQyxtREFDQSwwREFBTSxNQUFLLFlBQVcsU0FDdEIsc0ZBQVEsS0FDUixzRUFBUSxLQUVaLG1GQUFTLFNBQVEsa0NBQWlDLGlCQUFjLFlBQVcsU0FBUyxLQUNwRixnRUFBVSxVQUFTLFdBQVUsVUFDN0IscURBRUEsbURBQVMsZUFBVCxNQUFxQixVQUFTLFVBQVMsVUFBUyxXQUFVLE9BQU0sTUFBSyxRQUFPLE1BQUssT0FDakYsNERBQVksSUFBRyxRQUFPLE9BQU0sU0FBUSxlQUFwQyxNQUFnRCxVQUFTLFNBQVEsT0FBTSxPQUFNLFFBQU8sS0FBSSxPQUN4RjtZQUVFO2VBQ0E7d0JBQ0E7a0JBQ0E7Z0JBQ0E7YUFBSyxhQUFDLE1BQVc7aUJBQWM7QUFHakM7QUFSRSwwQkFRRiw0QkFBVSxVQUNWLDhEQUFVLFVBQVMsVUFBUyxVQUM1QixxREFBTyxlQUFQLE1BQW1CLFVB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LE9BQU0sUUFBTyxPQUFNLFVBQzVGLDJEQUFZLGdCQUFaLE1BQXlCLE1BQUssS0FBSSxVQUFTLGFBQVksT0FBTSxVQUFTLFFBQU8sT0FBTSxRQUFPLE9BQU0sVUFLOUYseURBQVEsS0FHYjs7Ozs7RUF4R2lCLGdCQTJHcEI7O2tCQUFlLE0iLCJmaWxlIjoiMS5jMzVmY2Y5NmNhNjQ4YTExNDUwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IGFwcGx5SW1wdWxzZSBmcm9tICcuLy4uL3N0YXRpYy9pbXB1bHNlJztcblxubGV0IHNvY2tldDtcbmNvbnN0IEhPU1QgPSBgaHR0cDovLyR7b3MuaG9zdG5hbWUoKX1gO1xuXG5pZiAoSE9TVCA9PT0gJ2h0dHA6Ly9sb2NhbGhvc3QnKSB7XG4gIHNvY2tldCA9IGlvKGAke0hPU1R9OjMwMDBgKTtcbn0gZWxzZSB7XG4gIHNvY2tldCA9IGlvKEhPU1QpO1xufVxuXG5jb25zb2xlLmxvZyhgSE9TVDogJHtIT1NUfWApO1xuXG4vLyBJbnN0YW50aWF0ZSB2YXJpYWJsZXMgdXNlZCBmb3IgcmVmc1xubGV0IGJveEI7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc29ja2V0Lm9uKCdoZWxsbycsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbignc2NlbmVVcGRhdGUnLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1NjZW5lIHVwZGF0ZSByZWNlaXZlZCBmcm9tIHNlcnZlciB0byBjbGllbnQnKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAvLyBBcHBseSBpbXB1bHNlXG4gICAgICBhcHBseUltcHVsc2UoYm94Qik7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTY2VuZUNsaWNrKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ1NjZW5lIHdhcyBjbGlja2VkJyk7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuXG4gICAgc29ja2V0LmVtaXQoJ3NjZW5lQ2xpY2tlZCcsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZXZlbnQ6ICdTY2VuZSBjbGlja2VkJyxcbiAgICAgICAgdGltZVN0YW1wOiBEYXRlLm5vdygpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5NeSBwYWdlIHRpdGxlPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL2FmcmFtZS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvYWZyYW1lLXBoeXNpY3Mtc3lzdGVtLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgIDxhLXNjZW5lIHBoeXNpY3M9XCJkZWJ1ZzogZmFsc2U7IGZyaWN0aW9uOiAwLjAwMjtcIiBwaHlzaWNzLXdvcmxkPVwiMCAtOS44IDBcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNjZW5lQ2xpY2t9PlxuICAgICAgPGEtZW50aXR5IHJvdGF0aW9uPVwiLTQ1IDAgMFwiIHBvc2l0aW9uPVwiMCA1IDhcIj5cbiAgICAgIDxhLWNhbWVyYT48L2EtY2FtZXJhPlxuICAgICAgPC9hLWVudGl0eT5cbiAgICAgIDxhLXBsYW5lIHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiMCAtMSAwXCIgcm90YXRpb249XCItOTAgMCAwXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgY29sb3I9XCIjN0JDOEE0XCI+PC9hLXBsYW5lPlxuICAgICAgPGEtY3lsaW5kZXIgaWQ9XCJib3hBXCIgY29sb3I9XCJ3aGl0ZVwiIHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiMCAwIDBcIiB3aWR0aD1cIjAuNVwiIGhlaWdodD1cIjFcIiBkZXB0aD1cIjAuNVwiPjwvYS1jeWxpbmRlcj5cbiAgICAgIDxhLXNwaGVyZVxuICAgICAgICBpZD1cImJveEJcIlxuICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgIGR5bmFtaWMtYm9keT1cIm1hc3M6IDUwXCJcbiAgICAgICAgcG9zaXRpb249XCIwIC01IDAuMlwiXG4gICAgICAgIHJhZGl1cz1cIjAuNVwiXG4gICAgICAgIHJlZj17KGJveGIpID0+IHsgYm94QiA9IGJveGI7IH19XG4gICAgICA+PC9hLXNwaGVyZT5cblxuICAgICAgPGEtZW50aXR5IHBvc2l0aW9uPVwiMC44NSAtMC4zNSAwXCI+XG4gICAgICA8YS1lbnRpdHkgcG9zaXRpb249XCIyIC0yIDBcIiByb3RhdGlvbj1cIjAgMCAyNVwiPlxuICAgICAgPGEtYm94IHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiNCAwIDAuMTJcIiBkZXB0aD1cIjAuMVwiIHdpZHRoPVwiM1wiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjQgLTAuMSAwXCIgZGVwdGg9XCIwLjI0XCIgaGVpZ2h0PVwiMC44XCIgd2lkdGg9XCIzXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgPGEtYm94IHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiNCAwIC0wLjEyXCIgZGVwdGg9XCIwLjFcIiB3aWR0aD1cIjNcIiBjb2xvcj1cInllbGxvd1wiPjwvYS1ib3g+XG4gICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCIyLjUgMCAwXCIgZGVwdGg9XCIwLjI0XCIgaGVpZ2h0PVwiMS4zXCIgd2lkdGg9XCIwLjFcIiBjb2xvcj1cInllbGxvd1wiPjwvYS1ib3g+XG4gICAgICA8L2EtZW50aXR5PlxuICAgICAgPGEtY3lsaW5kZXIgZHluYW1pYy1ib2R5IG1hc3M9XCIyXCIgcG9zaXRpb249XCI0LjUgMC41IDBcIiBjb2xvcj1cImdyZWVuXCIgaGVpZ2h0PVwiMC4xXCIgcmFkaXVzPVwiMC40XCIgcm90YXRpb249XCIwIDkwIDkwXCI+PC9hLWN5bGluZGVyPlxuICAgICAgPGEtY3lsaW5kZXIgZHluYW1pYy1ib2R5IG1hc3M9XCIyXCIgcG9zaXRpb249XCI1ICAgMSAgIDBcIiBjb2xvcj1cImJsdWVcIiBoZWlnaHQ9XCIwLjFcIiByYWRpdXM9XCIwLjRcIiByb3RhdGlvbj1cIjAgOTAgOTBcIj48L2EtY3lsaW5kZXI+XG4gICAgICA8YS1jeWxpbmRlciBkeW5hbWljLWJvZHkgbWFzcz1cIjJcIiBwb3NpdGlvbj1cIjUuNSAxLjUgMFwiIGNvbG9yPVwib3JhbmdlXCIgaGVpZ2h0PVwiMC4xXCIgcmFkaXVzPVwiMC40XCIgcm90YXRpb249XCIwIDkwIDkwXCI+PC9hLWN5bGluZGVyPlxuICAgICAgPC9hLWVudGl0eT5cblxuICAgICAgPGEtZW50aXR5IHBvc2l0aW9uPVwiLTAuODUgLTAuMzUgMFwiPlxuICAgICAgPGEtZW50aXR5IHBvc2l0aW9uPVwiLTIgLTIgMFwiIHJvdGF0aW9uPVwiMCAwIC0yNVwiPlxuICAgICAgPGEtYm94IHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiLTQgMCAwLjEyXCIgZGVwdGg9XCIwLjFcIiB3aWR0aD1cIjNcIiBjb2xvcj1cInllbGxvd1wiPjwvYS1ib3g+XG4gICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCItNCAtMC4xIDBcIiBkZXB0aD1cIjAuMjRcIiBoZWlnaHQ9XCIwLjhcIiB3aWR0aD1cIjNcIiBjb2xvcj1cInllbGxvd1wiPjwvYS1ib3g+XG4gICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCItNCAwIC0wLjEyXCIgZGVwdGg9XCIwLjFcIiB3aWR0aD1cIjNcIiBjb2xvcj1cInllbGxvd1wiPjwvYS1ib3g+XG4gICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCItMi41IDAgMFwiIGRlcHRoPVwiMC4yNFwiIGhlaWdodD1cIjEuM1wiIHdpZHRoPVwiMC4xXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgPC9hLWVudGl0eT5cbiAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiLTQuNSAwLjUgMFwiIGNvbG9yPVwiZ3JlZW5cIiBoZWlnaHQ9XCIwLjFcIiByYWRpdXM9XCIwLjRcIiByb3RhdGlvbj1cIjAgOTAgOTBcIj48L2EtY3lsaW5kZXI+XG4gICAgICA8YS1jeWxpbmRlciBkeW5hbWljLWJvZHkgbWFzcz1cIjJcIiBwb3NpdGlvbj1cIi01ICAgMSAgIDBcIiBjb2xvcj1cImJsdWVcIiBoZWlnaHQ9XCIwLjFcIiByYWRpdXM9XCIwLjRcIiByb3RhdGlvbj1cIjAgOTAgOTBcIj48L2EtY3lsaW5kZXI+XG4gICAgICA8YS1jeWxpbmRlciBkeW5hbWljLWJvZHkgbWFzcz1cIjJcIiBwb3NpdGlvbj1cIi01LjUgMS41IDBcIiBjb2xvcj1cIm9yYW5nZVwiIGhlaWdodD1cIjAuMVwiIHJhZGl1cz1cIjAuNFwiIHJvdGF0aW9uPVwiMCA5MCA5MFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgIDwvYS1lbnRpdHk+XG5cbiAgICAgIDxhLWVudGl0eSBwb3NpdGlvbj1cIjAgLTAuMzUgLTAuODVcIj5cbiAgICAgIDxhLWVudGl0eSBwb3NpdGlvbj1cIjAgLTIgLTJcIiByb3RhdGlvbj1cIjAgOTAgMjVcIj5cbiAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjQgMCAwLjEyXCIgZGVwdGg9XCIwLjFcIiB3aWR0aD1cIjNcIiBjb2xvcj1cInllbGxvd1wiPjwvYS1ib3g+XG4gICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCI0IC0wLjEgMFwiIGRlcHRoPVwiMC4yNFwiIGhlaWdodD1cIjAuOFwiIHdpZHRoPVwiM1wiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjQgMCAtMC4xMlwiIGRlcHRoPVwiMC4xXCIgd2lkdGg9XCIzXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgPGEtYm94IHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiMi41IDAgMFwiIGRlcHRoPVwiMC4yNFwiIGhlaWdodD1cIjEuM1wiIHdpZHRoPVwiMC4xXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgPC9hLWVudGl0eT5cbiAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiMCAwLjUgLTQuNVwiIGNvbG9yPVwiZ3JlZW5cIiBoZWlnaHQ9XCIwLjFcIiByYWRpdXM9XCIwLjRcIiByb3RhdGlvbj1cIjAgMCA5MFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiMCAxICAgLTVcIiBjb2xvcj1cImJsdWVcIiBoZWlnaHQ9XCIwLjFcIiByYWRpdXM9XCIwLjRcIiByb3RhdGlvbj1cIjAgMCA5MFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiMCAxLjUgLTUuNVwiIGNvbG9yPVwib3JhbmdlXCIgaGVpZ2h0PVwiMC4xXCIgcmFkaXVzPVwiMC40XCIgcm90YXRpb249XCIwIDAgOTBcIj48L2EtY3lsaW5kZXI+XG4gICAgICA8L2EtZW50aXR5PlxuXG4gICAgICA8YS1lbnRpdHkgcG9zaXRpb249XCIwIC0wLjM1IDAuODVcIj5cbiAgICAgIDxhLWVudGl0eSBwb3NpdGlvbj1cIjAgLTIgMlwiIHJvdGF0aW9uPVwiMCAtOTAgMjVcIj5cbiAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjQgMCAwLjEyXCIgZGVwdGg9XCIwLjFcIiB3aWR0aD1cIjNcIiBjb2xvcj1cInllbGxvd1wiPjwvYS1ib3g+XG4gICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCI0IC0wLjEgMFwiIGRlcHRoPVwiMC4yNFwiIGhlaWdodD1cIjAuOFwiIHdpZHRoPVwiM1wiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjQgMCAtMC4xMlwiIGRlcHRoPVwiMC4xXCIgd2lkdGg9XCIzXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgPGEtYm94IHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiMi41IDAgMFwiIGRlcHRoPVwiMC4yNFwiIGhlaWdodD1cIjEuM1wiIHdpZHRoPVwiMC4xXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgPC9hLWVudGl0eT5cbiAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiMCAwLjUgNC41XCIgY29sb3I9XCJncmVlblwiIGhlaWdodD1cIjAuMVwiIHJhZGl1cz1cIjAuNFwiIHJvdGF0aW9uPVwiMCAwIDkwXCI+PC9hLWN5bGluZGVyPlxuICAgICAgPGEtY3lsaW5kZXIgZHluYW1pYy1ib2R5IG1hc3M9XCIyXCIgcG9zaXRpb249XCIwIDEgICA1XCIgY29sb3I9XCJibHVlXCIgaGVpZ2h0PVwiMC4xXCIgcmFkaXVzPVwiMC40XCIgcm90YXRpb249XCIwIDAgOTBcIj48L2EtY3lsaW5kZXI+XG4gICAgICA8YS1jeWxpbmRlciBkeW5hbWljLWJvZHkgbWFzcz1cIjJcIiBwb3NpdGlvbj1cIjAgMS41IDUuNVwiIGNvbG9yPVwib3JhbmdlXCIgaGVpZ2h0PVwiMC4xXCIgcmFkaXVzPVwiMC40XCIgcm90YXRpb249XCIwIDAgOTBcIj48L2EtY3lsaW5kZXI+XG4gICAgICA8L2EtZW50aXR5PlxuXG4gICAgICA8L2Etc2NlbmU+XG5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL3NjcmlwdC5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==