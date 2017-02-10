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

var _socket = __webpack_require__(605);

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;

var socket = (0, _socket2.default)('http://localhost:' + port);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz8wMjg3NDI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFUCxJQUFNLE9BQU8sUUFBUSxJQUFJLFFBQVE7O0FBRWpDLElBQU0sU0FBUyw0Q0FBdUI7O0lBRWhDOzs7Ozs7Ozs7OztrQ0FDVSxPQUNaO2NBQVEsSUFDUjtjQUFRLElBRVI7O2FBQU8sS0FBSzs7aUJBR1I7cUJBQVcsS0FHaEI7QUFKSztBQURGOzs7O3dDQVFGO2FBQU8sR0FBRyxTQUFTLFVBQUMsTUFDbEI7Z0JBQVEsSUFDVDtBQUNGOzs7OzZCQUdDOzZCQUNFLHFCQUNFLHNCQUFDLDhCQUNDLG1EQUNBLDBEQUFNLE1BQUssWUFBVyxTQUN0QixzRkFBUSxLQUVWLGlHQUFTLFNBQVEsZUFBYyxJQUFHLFlBQVcsU0FBUyxLQUNwRCw0REFBUyxlQUFULE1BQXFCLFVBQVMsVUFBUyxVQUFTLFdBQVUsT0FBTSxNQUFLLFFBQU8sTUFBSyxPQUNqRiwwREFBVSxnQkFBYSxjQUFhLElBQUcsV0FBVSxVQUFTLFlBQVcsVUFBUyxTQUFRLE9BQU0sV0FBVSxPQUFNLE9BQU0sT0FBTSxPQUFNLE9BQzVIO21CQUVFO2FBQ0E7Y0FDQTtnQkFDQTtZQUNBO2dCQUdGO0FBUkUsd0RBUVUsSUFBRyxZQUFXLFVBQzFCLHdEQUFVLElBQUcsUUFBTyxLQUFLLEtBQ3ZCLGlEQUFPLElBQUcsV0FBVSxVQUFTLFdBQVUsVUFBUyxTQUFRLE9BQU0sV0FBVSxPQUFNLE9BQU0sUUFBTyxPQUFNLE9BRWpHLG9EQUFVLElBQUcsUUFBTyxVQUFTLFdBQVUsUUFBTyxRQUFPLE9BRXJEO1lBRUU7bUJBQ0E7ZUFDQTthQUNBO21CQUNBO2NBQ0E7WUFDQTtnQkFRYjtBQWZhLFdBekJWOzs7OztFQXJCYyxnQkFnRXBCOztrQkFBZSxNIiwiZmlsZSI6IjEuNDk3YTE5MjA5NzBiMDgxZjk4MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG5jb25zdCBzb2NrZXQgPSBpbyhgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCk7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZW1pdFNjZW5lRGF0YShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdTY2VuZSB3YXMgY2xpY2tlZCcpO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcblxuICAgIHNvY2tldC5lbWl0KCdzY2VuZUNsaWNrZWQnLCB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGV2ZW50OiAnU2NlbmUgY2xpY2tlZCcsXG4gICAgICAgIHRpbWVTdGFtcDogRGF0ZS5ub3coKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc29ja2V0Lm9uKCdoZWxsbycsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk15IHBhZ2UgdGl0bGU8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWZyYW1lLmlvL3JlbGVhc2VzLzAuNC4wL2FmcmFtZS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8YS1zY2VuZSBwaHlzaWNzPVwiZGVidWc6IHRydWVcIiBpZD1cInRoZXNjZW5lXCIgb25DbGljaz17dGhpcy5lbWl0U2NlbmVEYXRhfT5cbiAgICAgICAgICA8YS1wbGFuZSBzdGF0aWMtYm9keSBwb3NpdGlvbj1cIjAgMCAtOFwiIHJvdGF0aW9uPVwiLTkwIDAgMFwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIGNvbG9yPVwiIzdCQzhBNFwiPjwvYS1wbGFuZT5cbiAgICAgICAgICA8YS1lbnRpdHkgZHluYW1pYy1ib2R5PVwic2hhcGU6IGJveFwiIGlkPVwibHVjaWZlclwiIHBvc2l0aW9uPVwiMCAwLjUgLTVcIiByb3RhdGlvbj1cIjAgMCAwXCIgY29sb3I9XCIjNENDM0Q5XCIgZGVwdGg9XCIwLjVcIiBoZWlndD1cIjAuNVwiIHdpZHRoPVwiNVwiPlxuICAgICAgICAgICAgPGEtYW5pbWF0aW9uXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZT1cInJvdGF0aW9uXCJcbiAgICAgICAgICAgICAgZHVyPVwiMTAwMDBcIlxuICAgICAgICAgICAgICBmaWxsPVwiZm9yd2FyZHNcIlxuICAgICAgICAgICAgICBlYXNpbmc9XCJsaW5lYXJcIlxuICAgICAgICAgICAgICB0bz1cIjAgMzYwIDBcIlxuICAgICAgICAgICAgICByZXBlYXQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvYS1hbmltYXRpb24+XG4gICAgICAgICAgICA8YS1jeWxpbmRlciBpZD1cImN5bGluZGVyXCIgcG9zaXRpb249XCIwIDAgMFwiPjwvYS1jeWxpbmRlcj5cbiAgICAgICAgICAgIDxhLWVudGl0eSBpZD1cIm1vdmVcIiByZWY9e3RoaXMudGVzdH0+XG4gICAgICAgICAgICAgIDxhLWJveCBpZD1cImhlZmJvb21cIiBwb3NpdGlvbj1cIjIgMC41IDBcIiByb3RhdGlvbj1cIjAgMCAwXCIgY29sb3I9XCIjNENDM0Q5XCIgZGVwdGg9XCIwLjVcIiBoZWlnaHQ9XCIwLjVcIiB3aWR0aD1cIjRcIj5cbiAgICAgICAgICAgICAgPC9hLWJveD5cbiAgICAgICAgICAgICAgPGEtc3BoZXJlIGlkPVwic3RlZlwiIHBvc2l0aW9uPVwiNCAwLjUgMFwiIHJhZGl1cz1cIjAuNzVcIiBjb2xvcj1cIiNFRjJENUVcIj5cbiAgICAgICAgICAgICAgPC9hLXNwaGVyZT5cbiAgICAgICAgICAgICAgPGEtYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgaWQ9XCJnZW5pdXNcIlxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZT1cInJvdGF0aW9uXCJcbiAgICAgICAgICAgICAgICBiZWdpbj1cInVwXCJcbiAgICAgICAgICAgICAgICBkdXI9XCIxMDAwXCJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJhbHRlcm5hdGVcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJmb3J3YXJkc1wiXG4gICAgICAgICAgICAgICAgdG89XCIwIDAgNjVcIlxuICAgICAgICAgICAgICAgIHJlcGVhdD1cIjFcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvYS1hbmltYXRpb24+XG4gICAgICAgICAgICA8L2EtZW50aXR5PlxuICAgICAgICAgIDwvYS1lbnRpdHk+XG4gICAgICAgIDwvYS1zY2VuZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=