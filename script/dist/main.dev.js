"use strict";

var _swiperBundleEsmBrowserMin = _interopRequireDefault(require("https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js"));

var _modal = _interopRequireDefault(require("./modal.js"));

var _closeBg = _interopRequireDefault(require("./closeBg.js"));

var _calc = _interopRequireDefault(require("./calc.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var swiper = new _swiperBundleEsmBrowserMin["default"]('.swiper-container', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  }
});
var swiperBalconMin = new _swiperBundleEsmBrowserMin["default"]('.balcon-min', {
  direction: 'horizontal',
  slidesPerView: 4,
  freeMode: false,
  loop: false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true
});
var swiperBalcon = new _swiperBundleEsmBrowserMin["default"]('.swiper-container', {
  direction: 'horizontal',
  loop: false,
  thumbs: {
    swiper: swiperBalconMin
  }
});
(0, _modal["default"])('.button_green', '.close');
(0, _modal["default"])('.modal_call', '.close');
(0, _modal["default"])('.modal_call_ring', '.close');
(0, _closeBg["default"])('.modal-bg');
(0, _calc["default"])();
//# sourceMappingURL=main.dev.js.map
