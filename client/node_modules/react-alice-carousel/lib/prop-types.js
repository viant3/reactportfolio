'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = {
  autoHeight: _propTypes2.default.bool,
  autoPlay: _propTypes2.default.bool,
  autoPlayDirection: _propTypes2.default.string,
  autoPlayInterval: _propTypes2.default.number,
  buttonsDisabled: _propTypes2.default.bool,
  children: _propTypes2.default.array,
  controlsStrategy: _propTypes2.default.oneOf(['default', 'responsive']),
  disableAutoPlayOnAction: _propTypes2.default.bool,
  dotsDisabled: _propTypes2.default.bool,
  duration: _propTypes2.default.number,
  fadeOutAnimation: _propTypes2.default.bool,
  infinite: _propTypes2.default.bool,
  items: _propTypes2.default.array,
  keysControlDisabled: _propTypes2.default.bool,
  mouseTrackingEnabled: _propTypes2.default.bool,
  onInitialized: _propTypes2.default.func,
  onResized: _propTypes2.default.func,
  onSlideChange: _propTypes2.default.func,
  onSlideChanged: _propTypes2.default.func,
  playButtonEnabled: _propTypes2.default.bool,
  preventEventOnTouchMove: _propTypes2.default.bool,
  responsive: _propTypes2.default.object,
  shouldHandleResizeEvent: _propTypes2.default.func,
  showSlideInfo: _propTypes2.default.bool,
  slideToIndex: _propTypes2.default.number,
  stagePadding: _propTypes2.default.object,
  startIndex: _propTypes2.default.number,
  stopAutoPlayOnHover: _propTypes2.default.bool,
  swipeDisabled: _propTypes2.default.bool,
  touchTrackingEnabled: _propTypes2.default.bool
};

var defaultProps = exports.defaultProps = {
  autoHeight: false,
  autoPlay: false,
  autoPlayDirection: 'ltr',
  autoPlayInterval: 250,
  buttonsDisabled: false,
  children: [],
  controlsStrategy: 'default',
  disableAutoPlayOnAction: false,
  dotsDisabled: false,
  duration: 250,
  fadeOutAnimation: false,
  infinite: true,
  items: [],
  keysControlDisabled: false,
  mouseTrackingEnabled: false,
  playButtonEnabled: false,
  preventEventOnTouchMove: false,
  responsive: {},
  showSlideInfo: false,
  slideToIndex: 0,
  stagePadding: {},
  startIndex: 0,
  stopAutoPlayOnHover: true,
  swipeDisabled: false,
  touchTrackingEnabled: true
};