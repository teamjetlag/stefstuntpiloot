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

        // Apply impulse
        (0, _impulse2.default)(boxB);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz8zNWNmYmU1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDa0I7Ozs7OztBQUV6QixJQUFJLGNBQUo7QUFDQSxJQUFNLG1CQUFpQixhQUFHOztBQUUxQixJQUFJLFNBQVMsb0JBQ1g7V0FBUyxzQkFBTSxPQUNoQjtBQUZELE9BR0U7V0FBUyxzQkFDVjs7O0FBRUQsUUFBUSxlQUFhOztBQUVyQjtBQUNBLElBQUksWUFBSjs7SUFFTTs7Ozs7Ozs7Ozs7cUNBQ2EsT0FDZjtjQUFRLElBQ1I7Y0FBUSxJQUVSOzthQUFPLEtBQUs7O2lCQUdSO3FCQUFXLEtBR2hCO0FBSks7QUFERjs7Ozt3Q0FRRjthQUFPLEdBQUcsU0FBUyxVQUFDLE1BQ2xCO2dCQUFRLElBQ1Q7QUFFRDs7YUFBTyxHQUFHLGVBQWUsVUFBQyxNQUN4QjtnQkFBUSxJQUNSO2dCQUFRLElBRVI7O0FBQ0E7K0JBQ0Q7QUFDRjs7Ozs2QkFHQzthQUNFLHFDQUNFLHNCQUFDLDhCQUNDLG1EQUNBLDBEQUFNLE1BQUssWUFBVyxTQUN0QixzRkFBUSxLQUNSLHNFQUFRLEtBRVYsbUZBQVMsU0FBUSxrQ0FBaUMsaUJBQWMsWUFBVyxTQUFTLEtBQ2xGLGdFQUFVLFVBQVMsV0FBVSxVQUMzQixxREFFRixtREFBUyxlQUFULE1BQXFCLFVBQVMsVUFBUyxVQUFTLFdBQVUsT0FBTSxNQUFLLFFBQU8sTUFBSyxPQUNqRiw0REFBWSxJQUFHLFFBQU8sT0FBTSxTQUFRLGVBQXBDLE1BQWdELFVBQVMsU0FBUSxPQUFNLE9BQU0sUUFBTyxLQUFJLE9BQ3hGO1lBRUU7ZUFDQTt3QkFDQTtrQkFDQTtnQkFDQTthQUFLLGFBQUMsTUFBVztpQkFBYztBQUdqQztBQVJFLDBCQVFGLDRCQUFVLFVBQ1IsOERBQVUsVUFBUyxVQUFTLFVBQzFCLHFEQUFPLGVBQVAsTUFBbUIsVUFB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T0FBTSxRQUFPLE9BQU0sVUFDNUYsMkRBQVksZ0JBQVosTUFBeUIsTUFBSyxLQUFJLFVBQVMsYUFBWSxPQUFNLFVBQVMsUUFBTyxPQUFNLFFBQU8sT0FBTSxVQUlwRyx5REFBUSxLQUdiOzs7OztFQXZHaUIsZ0JBMEdwQjs7a0JBQWUsTSIsImZpbGUiOiIxLjhhZjkzNTc2MDRhNzk2NzY1NjFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQgYXBwbHlJbXB1bHNlIGZyb20gJy4vLi4vc3RhdGljL2ltcHVsc2UnO1xuXG5sZXQgc29ja2V0O1xuY29uc3QgSE9TVCA9IGBodHRwOi8vJHtvcy5ob3N0bmFtZSgpfWA7XG5cbmlmIChIT1NUID09PSAnaHR0cDovL2xvY2FsaG9zdCcpIHtcbiAgc29ja2V0ID0gaW8oYCR7SE9TVH06MzAwMGApO1xufSBlbHNlIHtcbiAgc29ja2V0ID0gaW8oSE9TVCk7XG59XG5cbmNvbnNvbGUubG9nKGBIT1NUOiAke0hPU1R9YCk7XG5cbi8vIEluc3RhbnRpYXRlIHZhcmlhYmxlcyB1c2VkIGZvciByZWZzXG5sZXQgYm94QjtcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBoYW5kbGVTY2VuZUNsaWNrKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ1NjZW5lIHdhcyBjbGlja2VkJyk7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuXG4gICAgc29ja2V0LmVtaXQoJ3NjZW5lQ2xpY2tlZCcsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZXZlbnQ6ICdTY2VuZSBjbGlja2VkJyxcbiAgICAgICAgdGltZVN0YW1wOiBEYXRlLm5vdygpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzb2NrZXQub24oJ2hlbGxvJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKCdzY2VuZVVwZGF0ZScsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnU2NlbmUgdXBkYXRlIHJlY2VpdmVkIGZyb20gc2VydmVyIHRvIGNsaWVudCcpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgIC8vIEFwcGx5IGltcHVsc2VcbiAgICAgIGFwcGx5SW1wdWxzZShib3hCKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk15IHBhZ2UgdGl0bGU8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvYWZyYW1lLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL3N0YXRpYy9hZnJhbWUtcGh5c2ljcy1zeXN0ZW0uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8YS1zY2VuZSBwaHlzaWNzPVwiZGVidWc6IGZhbHNlOyBmcmljdGlvbjogMC4wMDI7XCIgcGh5c2ljcy13b3JsZD1cIjAgLTkuOCAwXCIgb25DbGljaz17dGhpcy5oYW5kbGVTY2VuZUNsaWNrfT5cbiAgICAgICAgICA8YS1lbnRpdHkgcm90YXRpb249XCItNDUgMCAwXCIgcG9zaXRpb249XCIwIDUgOFwiPlxuICAgICAgICAgICAgPGEtY2FtZXJhPjwvYS1jYW1lcmE+XG4gICAgICAgICAgPC9hLWVudGl0eT5cbiAgICAgICAgICA8YS1wbGFuZSBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjAgLTEgMFwiIHJvdGF0aW9uPVwiLTkwIDAgMFwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIGNvbG9yPVwiIzdCQzhBNFwiPjwvYS1wbGFuZT5cbiAgICAgICAgICA8YS1jeWxpbmRlciBpZD1cImJveEFcIiBjb2xvcj1cIndoaXRlXCIgc3RhdGljLWJvZHkgcG9zaXRpb249XCIwIDAgMFwiIHdpZHRoPVwiMC41XCIgaGVpZ2h0PVwiMVwiIGRlcHRoPVwiMC41XCI+PC9hLWN5bGluZGVyPlxuICAgICAgICAgIDxhLXNwaGVyZVxuICAgICAgICAgICAgaWQ9XCJib3hCXCJcbiAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgIGR5bmFtaWMtYm9keT1cIm1hc3M6IDUwXCJcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiMCAtNSAwLjJcIlxuICAgICAgICAgICAgcmFkaXVzPVwiMC41XCJcbiAgICAgICAgICAgIHJlZj17KGJveGIpID0+IHsgYm94QiA9IGJveGI7IH19XG4gICAgICAgICAgPjwvYS1zcGhlcmU+XG5cbiAgICAgICAgICA8YS1lbnRpdHkgcG9zaXRpb249XCIwLjg1IC0wLjM1IDBcIj5cbiAgICAgICAgICAgIDxhLWVudGl0eSBwb3NpdGlvbj1cIjIgLTIgMFwiIHJvdGF0aW9uPVwiMCAwIDI1XCI+XG4gICAgICAgICAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjQgMCAwLjEyXCIgZGVwdGg9XCIwLjFcIiB3aWR0aD1cIjNcIiBjb2xvcj1cInllbGxvd1wiPjwvYS1ib3g+XG4gICAgICAgICAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjQgLTAuMSAwXCIgZGVwdGg9XCIwLjI0XCIgaGVpZ2h0PVwiMC44XCIgd2lkdGg9XCIzXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgICAgICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCI0IDAgLTAuMTJcIiBkZXB0aD1cIjAuMVwiIHdpZHRoPVwiM1wiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgICAgICAgICAgPGEtYm94IHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiMi41IDAgMFwiIGRlcHRoPVwiMC4yNFwiIGhlaWdodD1cIjEuM1wiIHdpZHRoPVwiMC4xXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgICAgICAgPC9hLWVudGl0eT5cbiAgICAgICAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiNC41IDAuNSAwXCIgY29sb3I9XCJncmVlblwiIGhlaWdodD1cIjAuMVwiIHJhZGl1cz1cIjAuNFwiIHJvdGF0aW9uPVwiMCA5MCA5MFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgICAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiNSAgIDEgICAwXCIgY29sb3I9XCJibHVlXCIgaGVpZ2h0PVwiMC4xXCIgcmFkaXVzPVwiMC40XCIgcm90YXRpb249XCIwIDkwIDkwXCI+PC9hLWN5bGluZGVyPlxuICAgICAgICAgICAgPGEtY3lsaW5kZXIgZHluYW1pYy1ib2R5IG1hc3M9XCIyXCIgcG9zaXRpb249XCI1LjUgMS41IDBcIiBjb2xvcj1cIm9yYW5nZVwiIGhlaWdodD1cIjAuMVwiIHJhZGl1cz1cIjAuNFwiIHJvdGF0aW9uPVwiMCA5MCA5MFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgICAgICA8L2EtZW50aXR5PlxuXG4gICAgICAgICAgPGEtZW50aXR5IHBvc2l0aW9uPVwiLTAuODUgLTAuMzUgMFwiPlxuICAgICAgICAgICAgPGEtZW50aXR5IHBvc2l0aW9uPVwiLTIgLTIgMFwiIHJvdGF0aW9uPVwiMCAwIC0yNVwiPlxuICAgICAgICAgICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCItNCAwIDAuMTJcIiBkZXB0aD1cIjAuMVwiIHdpZHRoPVwiM1wiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgICAgICAgICAgPGEtYm94IHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiLTQgLTAuMSAwXCIgZGVwdGg9XCIwLjI0XCIgaGVpZ2h0PVwiMC44XCIgd2lkdGg9XCIzXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgICAgICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCItNCAwIC0wLjEyXCIgZGVwdGg9XCIwLjFcIiB3aWR0aD1cIjNcIiBjb2xvcj1cInllbGxvd1wiPjwvYS1ib3g+XG4gICAgICAgICAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIi0yLjUgMCAwXCIgZGVwdGg9XCIwLjI0XCIgaGVpZ2h0PVwiMS4zXCIgd2lkdGg9XCIwLjFcIiBjb2xvcj1cInllbGxvd1wiPjwvYS1ib3g+XG4gICAgICAgICAgICA8L2EtZW50aXR5PlxuICAgICAgICAgICAgPGEtY3lsaW5kZXIgZHluYW1pYy1ib2R5IG1hc3M9XCIyXCIgcG9zaXRpb249XCItNC41IDAuNSAwXCIgY29sb3I9XCJncmVlblwiIGhlaWdodD1cIjAuMVwiIHJhZGl1cz1cIjAuNFwiIHJvdGF0aW9uPVwiMCA5MCA5MFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgICAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiLTUgICAxICAgMFwiIGNvbG9yPVwiYmx1ZVwiIGhlaWdodD1cIjAuMVwiIHJhZGl1cz1cIjAuNFwiIHJvdGF0aW9uPVwiMCA5MCA5MFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgICAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiLTUuNSAxLjUgMFwiIGNvbG9yPVwib3JhbmdlXCIgaGVpZ2h0PVwiMC4xXCIgcmFkaXVzPVwiMC40XCIgcm90YXRpb249XCIwIDkwIDkwXCI+PC9hLWN5bGluZGVyPlxuICAgICAgICAgIDwvYS1lbnRpdHk+XG5cbiAgICAgICAgICA8YS1lbnRpdHkgcG9zaXRpb249XCIwIC0wLjM1IC0wLjg1XCI+XG4gICAgICAgICAgICA8YS1lbnRpdHkgcG9zaXRpb249XCIwIC0yIC0yXCIgcm90YXRpb249XCIwIDkwIDI1XCI+XG4gICAgICAgICAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjQgMCAwLjEyXCIgZGVwdGg9XCIwLjFcIiB3aWR0aD1cIjNcIiBjb2xvcj1cInllbGxvd1wiPjwvYS1ib3g+XG4gICAgICAgICAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjQgLTAuMSAwXCIgZGVwdGg9XCIwLjI0XCIgaGVpZ2h0PVwiMC44XCIgd2lkdGg9XCIzXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgICAgICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCI0IDAgLTAuMTJcIiBkZXB0aD1cIjAuMVwiIHdpZHRoPVwiM1wiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgICAgICAgICAgPGEtYm94IHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiMi41IDAgMFwiIGRlcHRoPVwiMC4yNFwiIGhlaWdodD1cIjEuM1wiIHdpZHRoPVwiMC4xXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgICAgICAgPC9hLWVudGl0eT5cbiAgICAgICAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiMCAwLjUgLTQuNVwiIGNvbG9yPVwiZ3JlZW5cIiBoZWlnaHQ9XCIwLjFcIiByYWRpdXM9XCIwLjRcIiByb3RhdGlvbj1cIjAgMCA5MFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgICAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiMCAxICAgLTVcIiBjb2xvcj1cImJsdWVcIiBoZWlnaHQ9XCIwLjFcIiByYWRpdXM9XCIwLjRcIiByb3RhdGlvbj1cIjAgMCA5MFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgICAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiMCAxLjUgLTUuNVwiIGNvbG9yPVwib3JhbmdlXCIgaGVpZ2h0PVwiMC4xXCIgcmFkaXVzPVwiMC40XCIgcm90YXRpb249XCIwIDAgOTBcIj48L2EtY3lsaW5kZXI+XG4gICAgICAgICAgPC9hLWVudGl0eT5cblxuICAgICAgICAgIDxhLWVudGl0eSBwb3NpdGlvbj1cIjAgLTAuMzUgMC44NVwiPlxuICAgICAgICAgICAgPGEtZW50aXR5IHBvc2l0aW9uPVwiMCAtMiAyXCIgcm90YXRpb249XCIwIC05MCAyNVwiPlxuICAgICAgICAgICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCI0IDAgMC4xMlwiIGRlcHRoPVwiMC4xXCIgd2lkdGg9XCIzXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgICAgICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCI0IC0wLjEgMFwiIGRlcHRoPVwiMC4yNFwiIGhlaWdodD1cIjAuOFwiIHdpZHRoPVwiM1wiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgICAgICAgICAgPGEtYm94IHN0YXRpYy1ib2R5IHBvc2l0aW9uPVwiNCAwIC0wLjEyXCIgZGVwdGg9XCIwLjFcIiB3aWR0aD1cIjNcIiBjb2xvcj1cInllbGxvd1wiPjwvYS1ib3g+XG4gICAgICAgICAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjIuNSAwIDBcIiBkZXB0aD1cIjAuMjRcIiBoZWlnaHQ9XCIxLjNcIiB3aWR0aD1cIjAuMVwiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgICAgICAgIDwvYS1lbnRpdHk+XG4gICAgICAgICAgICA8YS1jeWxpbmRlciBkeW5hbWljLWJvZHkgbWFzcz1cIjJcIiBwb3NpdGlvbj1cIjAgMC41IDQuNVwiIGNvbG9yPVwiZ3JlZW5cIiBoZWlnaHQ9XCIwLjFcIiByYWRpdXM9XCIwLjRcIiByb3RhdGlvbj1cIjAgMCA5MFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgICAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSBtYXNzPVwiMlwiIHBvc2l0aW9uPVwiMCAxICAgNVwiIGNvbG9yPVwiYmx1ZVwiIGhlaWdodD1cIjAuMVwiIHJhZGl1cz1cIjAuNFwiIHJvdGF0aW9uPVwiMCAwIDkwXCI+PC9hLWN5bGluZGVyPlxuICAgICAgICAgICAgPGEtY3lsaW5kZXIgZHluYW1pYy1ib2R5IG1hc3M9XCIyXCIgcG9zaXRpb249XCIwIDEuNSA1LjVcIiBjb2xvcj1cIm9yYW5nZVwiIGhlaWdodD1cIjAuMVwiIHJhZGl1cz1cIjAuNFwiIHJvdGF0aW9uPVwiMCAwIDkwXCI+PC9hLWN5bGluZGVyPlxuICAgICAgICAgIDwvYS1lbnRpdHk+XG4gICAgICAgIDwvYS1zY2VuZT5cblxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvc2NyaXB0LmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9