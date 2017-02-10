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
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('script', { src: '/static/aframe.min.js' }), _react2.default.createElement('script', { src: '/static/aframe-physics-system.js' })), _react2.default.createElement('a-scene', { physics: 'debug: false; friction:0.0001', 'physics-world': '0 -9.8 0', onClick: this.handleSceneClick }, _react2.default.createElement('a-entity', { rotation: '-45 0 0', position: '0 10 16' }, _react2.default.createElement('a-camera', null)), _react2.default.createElement('a-plane', { 'static-body': true, position: '0 -1 0', rotation: '-90 0 0', width: '20', height: '20', color: '#7BC8A4' }), _react2.default.createElement('a-cylinder', { id: 'boxA', color: 'white', 'static-body': true, position: '0 0 0', width: '0.5', height: '1', depth: '0.5' }), _react2.default.createElement('a-sphere', {
        id: 'boxB',
        color: 'red',
        'dynamic-body': 'mass: 20',
        position: '0 -5 0.2',
        radius: '0.5',
        ref: function ref(boxb) {
          boxB = boxb;
        }
      }), _react2.default.createElement('a-entity', null, _react2.default.createElement('a-entity', { position: '2 -0.5 0' }, _react2.default.createElement('a-entity', { position: '1 -1.85 0', rotation: '0 0 25' }, _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 0.1', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 -0.1 0', depth: '0.14', height: '0.8', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 -0.1', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '2.5 0 0', depth: '0.24', height: '1.3', width: '0.1', color: 'yellow' })), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, rotation: '90 0 0', mass: '5', position: '3.5 0.5 0', color: 'green', height: '0.1', radius: '0.4' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, rotation: '90 0 0', mass: '5', position: '4.5 1 0', color: 'blue', height: '0.1', radius: '0.4' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, rotation: '90 0 0', mass: '5', position: '5.5 1.5 0', color: 'orange', height: '0.1', radius: '0.4' }))), _react2.default.createElement('a-entity', { rotation: '0 180 0' }, _react2.default.createElement('a-entity', { position: '2 -0.5 0' }, _react2.default.createElement('a-entity', { position: '1 -1.85 0', rotation: '0 0 25' }, _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 0.1', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 -0.1 0', depth: '0.14', height: '0.8', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '4 0 -0.1', depth: '0.1', width: '3', color: 'yellow' }), _react2.default.createElement('a-box', { 'static-body': true, position: '2.5 0 0', depth: '0.24', height: '1.3', width: '0.1', color: 'yellow' })), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, rotation: '90 180 0', mass: '5', position: '3.5 0.5 0', color: 'green', height: '0.1', radius: '0.4' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, rotation: '90 180 0', mass: '5', position: '4.5 1 0', color: 'blue', height: '0.1', radius: '0.4' }), _react2.default.createElement('a-cylinder', { 'dynamic-body': true, rotation: '90 180 0', mass: '5', position: '5.5 1.5 0', color: 'orange', height: '0.1', radius: '0.4' })))), _react2.default.createElement('script', { src: '/static/script.js' }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDa0I7Ozs7OztBQUV6Qjs7QUFFQSxJQUFJLGNBQUo7QUFDQSxJQUFNLG1CQUFpQixhQUFHOztBQUUxQixJQUFJLFNBQVMsb0JBQ1g7V0FBUyxzQkFBTSxPQUNoQjtBQUZELE9BR0U7V0FBUyxzQkFDVjs7O0FBRUQsUUFBUSxlQUFhOztBQUVyQjtBQUNBLElBQUksWUFBSjs7SUFFTTs7Ozs7Ozs7Ozs7d0NBRUY7YUFBTyxHQUFHLFNBQVMsVUFBQyxNQUNsQjtnQkFBUSxJQUNUO0FBRUQ7O2FBQU8sR0FBRyxlQUFlLFVBQUMsTUFDeEI7Z0JBQVEsSUFDUjtnQkFBUSxJQUVSOztBQUNBOytCQUNEO0FBQ0Y7Ozs7cUNBRWdCLE9BQ2Y7Y0FBUSxJQUNSO2NBQVEsSUFFUjs7YUFBTyxLQUFLOztpQkFHUjtxQkFBVyxLQUdoQjtBQUpLO0FBREY7Ozs7NkJBUUY7YUFDRSxxQ0FDRSxzQkFBQyw4QkFDQyxtREFDQSwwREFBTSxNQUFLLFlBQVcsU0FDdEIsc0ZBQVEsS0FDUixzRUFBUSxLQUVWLG1GQUFTLFNBQVEsaUNBQWdDLGlCQUFjLFlBQVcsU0FBUyxLQUNqRixnRUFBVSxVQUFTLFdBQVUsVUFDM0IsdURBR0YsbURBQVMsZUFBVCxNQUFxQixVQUFTLFVBQVMsVUFBUyxXQUFVLE9BQU0sTUFBSyxRQUFPLE1BQUssT0FHakYsNERBQVksSUFBRyxRQUFPLE9BQU0sU0FBUSxlQUFwQyxNQUFnRCxVQUFTLFNBQVEsT0FBTSxPQUFNLFFBQU8sS0FBSSxPQUd4RjtZQUVFO2VBQ0E7d0JBQ0E7a0JBQ0E7Z0JBQ0E7YUFBSyxhQUFDLE1BQVc7aUJBQWM7QUFHakM7QUFSRSwwQkFRRiwwQkFDRSxrREFBVSxVQUNSLDBEQUFVLFVBQVMsYUFBWSxVQUM3QixxREFBTyxlQUFQLE1BQW1CLFVBQVMsV0FBVSxPQUFNLE9BQU0sT0FBTSxLQUFJLE9BQzVELHNEQUFPLGVBQVAsTUFBbUIsVUFBUyxZQUFXLE9BQU0sUUFBTyxRQUFPLE9BQU0sT0FBTSxLQUFJLE9BQzNFLHNEQUFPLGVBQVAsTUFBbUIsVUFBUyxZQUFXLE9BQU0sT0FBTSxPQUFNLEtBQUksT0FDN0Qsc0RBQU8sZUFBUCxNQUFtQixVQUFTLFdBQVUsT0FBTSxRQUFPLFFBQU8sT0FBTSxPQUFNLE9BQU0sT0FFOUUsNERBQVksZ0JBQVosTUFBeUIsVUFBUyxVQUFTLE1BQUssS0FBSSxVQUFTLGFBQVksT0FBTSxTQUFRLFFBQU8sT0FBTSxRQUNwRyx3REFBWSxnQkFBWixNQUF5QixVQUFTLFVBQVMsTUFBSyxLQUFJLFVBQVMsV0FBVSxPQUFNLFFBQU8sUUFBTyxPQUFNLFFBQ2pHLHdEQUFZLGdCQUFaLE1BQXlCLFVBQVMsVUFBUyxNQUFLLEtBQUksVUFBUyxhQUFZLE9BQU0sVUFBUyxRQUFPLE9BQU0sUUFJekcsd0RBQVUsVUFDUix5REFBVSxVQUNSLDBEQUFVLFVBQVMsYUFBWSxVQUM3QixxREFBTyxlQUFQLE1BQW1CLFVBQVMsV0FBVSxPQUFNLE9BQU0sT0FBTSxLQUFJLE9BQzVELHNEQUFPLGVBQVAsTUFBbUIsVUFBUyxZQUFXLE9BQU0sUUFBTyxRQUFPLE9BQU0sT0FBTSxLQUFJLE9BQzNFLHNEQUFPLGVBQVAsTUFBbUIsVUFBUyxZQUFXLE9BQU0sT0FBTSxPQUFNLEtBQUksT0FDN0Qsc0RBQU8sZUFBUCxNQUFtQixVQUFTLFdBQVUsT0FBTSxRQUFPLFFBQU8sT0FBTSxPQUFNLE9BQU0sT0FFOUUsNERBQVksZ0JBQVosTUFBeUIsVUFBUyxZQUFXLE1BQUssS0FBSSxVQUFTLGFBQVksT0FBTSxTQUFRLFFBQU8sT0FBTSxRQUN0Ryx3REFBWSxnQkFBWixNQUF5QixVQUFTLFlBQVcsTUFBSyxLQUFJLFVBQVMsV0FBVSxPQUFNLFFBQU8sUUFBTyxPQUFNLFFBQ25HLHdEQUFZLGdCQUFaLE1BQXlCLFVBQVMsWUFBVyxNQUFLLEtBQUksVUFBUyxhQUFZLE9BQU0sVUFBUyxRQUFPLE9BQU0sUUFLN0csdURBQVEsS0FHYjs7Ozs7RUF4RmlCLGdCQTJGcEI7O2tCQUFlLE0iLCJmaWxlIjoiMS5iYWQzYzgxYjk0NWI3ZDRhYzVjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IGFwcGx5SW1wdWxzZSBmcm9tICcuLy4uL3N0YXRpYy9pbXB1bHNlJztcblxuLy8gcGh5c2ljcy5yZWdpc3RlckFsbCgpO1xuXG5sZXQgc29ja2V0O1xuY29uc3QgSE9TVCA9IGBodHRwOi8vJHtvcy5ob3N0bmFtZSgpfWA7XG5cbmlmIChIT1NUID09PSAnaHR0cDovL2xvY2FsaG9zdCcpIHtcbiAgc29ja2V0ID0gaW8oYCR7SE9TVH06MzAwMGApO1xufSBlbHNlIHtcbiAgc29ja2V0ID0gaW8oSE9TVCk7XG59XG5cbmNvbnNvbGUubG9nKGBIT1NUOiAke0hPU1R9YCk7XG5cbi8vIEluc3RhbnRpYXRlIHZhcmlhYmxlcyB1c2VkIGZvciByZWZzXG5sZXQgYm94QjtcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzb2NrZXQub24oJ2hlbGxvJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKCdzY2VuZVVwZGF0ZScsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnU2NlbmUgdXBkYXRlIHJlY2VpdmVkIGZyb20gc2VydmVyIHRvIGNsaWVudCcpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgIC8vIEFwcGx5IGltcHVsc2VcbiAgICAgIGFwcGx5SW1wdWxzZShib3hCKTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNjZW5lQ2xpY2soZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnU2NlbmUgd2FzIGNsaWNrZWQnKTtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG5cbiAgICBzb2NrZXQuZW1pdCgnc2NlbmVDbGlja2VkJywge1xuICAgICAgZGF0YToge1xuICAgICAgICBldmVudDogJ1NjZW5lIGNsaWNrZWQnLFxuICAgICAgICB0aW1lU3RhbXA6IERhdGUubm93KClcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk15IHBhZ2UgdGl0bGU8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvYWZyYW1lLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL3N0YXRpYy9hZnJhbWUtcGh5c2ljcy1zeXN0ZW0uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8YS1zY2VuZSBwaHlzaWNzPVwiZGVidWc6IGZhbHNlOyBmcmljdGlvbjowLjAwMDFcIiBwaHlzaWNzLXdvcmxkPVwiMCAtOS44IDBcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNjZW5lQ2xpY2t9PlxuICAgICAgICAgIDxhLWVudGl0eSByb3RhdGlvbj1cIi00NSAwIDBcIiBwb3NpdGlvbj1cIjAgMTAgMTZcIj5cbiAgICAgICAgICAgIDxhLWNhbWVyYT48L2EtY2FtZXJhPlxuICAgICAgICAgIDwvYS1lbnRpdHk+XG5cbiAgICAgICAgICA8YS1wbGFuZSBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjAgLTEgMFwiIHJvdGF0aW9uPVwiLTkwIDAgMFwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIGNvbG9yPVwiIzdCQzhBNFwiPjwvYS1wbGFuZT5cblxuICAgICAgICAgIHsvKiBEeW5hbWljIGJveCAqL31cbiAgICAgICAgICA8YS1jeWxpbmRlciBpZD1cImJveEFcIiBjb2xvcj1cIndoaXRlXCIgc3RhdGljLWJvZHkgcG9zaXRpb249XCIwIDAgMFwiIHdpZHRoPVwiMC41XCIgaGVpZ2h0PVwiMVwiIGRlcHRoPVwiMC41XCI+PC9hLWN5bGluZGVyPlxuXG4gICAgICAgICAgey8qIER5bmFtaWMgYm94ICovfVxuICAgICAgICAgIDxhLXNwaGVyZVxuICAgICAgICAgICAgaWQ9XCJib3hCXCJcbiAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgIGR5bmFtaWMtYm9keT1cIm1hc3M6IDIwXCJcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiMCAtNSAwLjJcIlxuICAgICAgICAgICAgcmFkaXVzPVwiMC41XCJcbiAgICAgICAgICAgIHJlZj17KGJveGIpID0+IHsgYm94QiA9IGJveGI7IH19XG4gICAgICAgICAgPjwvYS1zcGhlcmU+XG5cbiAgICAgICAgICA8YS1lbnRpdHk+XG4gICAgICAgICAgICA8YS1lbnRpdHkgcG9zaXRpb249XCIyIC0wLjUgMFwiPlxuICAgICAgICAgICAgICA8YS1lbnRpdHkgcG9zaXRpb249XCIxIC0xLjg1IDBcIiByb3RhdGlvbj1cIjAgMCAyNVwiPlxuICAgICAgICAgICAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjQgMCAwLjFcIiBkZXB0aD1cIjAuMVwiIHdpZHRoPVwiM1wiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgICAgICAgICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCI0IC0wLjEgMFwiIGRlcHRoPVwiMC4xNFwiIGhlaWdodD1cIjAuOFwiIHdpZHRoPVwiM1wiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgICAgICAgICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCI0IDAgLTAuMVwiIGRlcHRoPVwiMC4xXCIgd2lkdGg9XCIzXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgICAgICAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjIuNSAwIDBcIiBkZXB0aD1cIjAuMjRcIiBoZWlnaHQ9XCIxLjNcIiB3aWR0aD1cIjAuMVwiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgICAgICAgICAgPC9hLWVudGl0eT5cbiAgICAgICAgICAgICAgPGEtY3lsaW5kZXIgZHluYW1pYy1ib2R5IHJvdGF0aW9uPVwiOTAgMCAwXCIgbWFzcz1cIjVcIiBwb3NpdGlvbj1cIjMuNSAwLjUgMFwiIGNvbG9yPVwiZ3JlZW5cIiBoZWlnaHQ9XCIwLjFcIiByYWRpdXM9XCIwLjRcIj48L2EtY3lsaW5kZXI+XG4gICAgICAgICAgICAgIDxhLWN5bGluZGVyIGR5bmFtaWMtYm9keSByb3RhdGlvbj1cIjkwIDAgMFwiIG1hc3M9XCI1XCIgcG9zaXRpb249XCI0LjUgMSAwXCIgY29sb3I9XCJibHVlXCIgaGVpZ2h0PVwiMC4xXCIgcmFkaXVzPVwiMC40XCI+PC9hLWN5bGluZGVyPlxuICAgICAgICAgICAgICA8YS1jeWxpbmRlciBkeW5hbWljLWJvZHkgcm90YXRpb249XCI5MCAwIDBcIiBtYXNzPVwiNVwiIHBvc2l0aW9uPVwiNS41IDEuNSAwXCIgY29sb3I9XCJvcmFuZ2VcIiBoZWlnaHQ9XCIwLjFcIiByYWRpdXM9XCIwLjRcIj48L2EtY3lsaW5kZXI+XG4gICAgICAgICAgICA8L2EtZW50aXR5PlxuICAgICAgICAgIDwvYS1lbnRpdHk+XG5cbiAgICAgICAgICA8YS1lbnRpdHkgcm90YXRpb249XCIwIDE4MCAwXCI+XG4gICAgICAgICAgICA8YS1lbnRpdHkgcG9zaXRpb249XCIyIC0wLjUgMFwiPlxuICAgICAgICAgICAgICA8YS1lbnRpdHkgcG9zaXRpb249XCIxIC0xLjg1IDBcIiByb3RhdGlvbj1cIjAgMCAyNVwiPlxuICAgICAgICAgICAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjQgMCAwLjFcIiBkZXB0aD1cIjAuMVwiIHdpZHRoPVwiM1wiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgICAgICAgICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCI0IC0wLjEgMFwiIGRlcHRoPVwiMC4xNFwiIGhlaWdodD1cIjAuOFwiIHdpZHRoPVwiM1wiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgICAgICAgICAgICA8YS1ib3ggc3RhdGljLWJvZHkgcG9zaXRpb249XCI0IDAgLTAuMVwiIGRlcHRoPVwiMC4xXCIgd2lkdGg9XCIzXCIgY29sb3I9XCJ5ZWxsb3dcIj48L2EtYm94PlxuICAgICAgICAgICAgICAgIDxhLWJveCBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjIuNSAwIDBcIiBkZXB0aD1cIjAuMjRcIiBoZWlnaHQ9XCIxLjNcIiB3aWR0aD1cIjAuMVwiIGNvbG9yPVwieWVsbG93XCI+PC9hLWJveD5cbiAgICAgICAgICAgICAgPC9hLWVudGl0eT5cbiAgICAgICAgICAgICAgPGEtY3lsaW5kZXIgZHluYW1pYy1ib2R5IHJvdGF0aW9uPVwiOTAgMTgwIDBcIiBtYXNzPVwiNVwiIHBvc2l0aW9uPVwiMy41IDAuNSAwXCIgY29sb3I9XCJncmVlblwiIGhlaWdodD1cIjAuMVwiIHJhZGl1cz1cIjAuNFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgICAgICAgICAgPGEtY3lsaW5kZXIgZHluYW1pYy1ib2R5IHJvdGF0aW9uPVwiOTAgMTgwIDBcIiBtYXNzPVwiNVwiIHBvc2l0aW9uPVwiNC41IDEgMFwiIGNvbG9yPVwiYmx1ZVwiIGhlaWdodD1cIjAuMVwiIHJhZGl1cz1cIjAuNFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgICAgICAgICAgPGEtY3lsaW5kZXIgZHluYW1pYy1ib2R5IHJvdGF0aW9uPVwiOTAgMTgwIDBcIiBtYXNzPVwiNVwiIHBvc2l0aW9uPVwiNS41IDEuNSAwXCIgY29sb3I9XCJvcmFuZ2VcIiBoZWlnaHQ9XCIwLjFcIiByYWRpdXM9XCIwLjRcIj48L2EtY3lsaW5kZXI+XG4gICAgICAgICAgICA8L2EtZW50aXR5PlxuICAgICAgICAgIDwvYS1lbnRpdHk+XG4gICAgICAgIDwvYS1zY2VuZT5cblxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvc2NyaXB0LmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9