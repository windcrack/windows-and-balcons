"use strict";

var _swiperBundleEsmBrowserMin = _interopRequireDefault(require("https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js"));

var _modal = _interopRequireDefault(require("./modal.js"));

var _closeBg = _interopRequireDefault(require("./closeBg.js"));

var _calc = _interopRequireDefault(require("./calc.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var modalCall = document.querySelectorAll('.modal-call'),
    body = document.querySelector('body');
var swiper = new _swiperBundleEsmBrowserMin["default"]('.swiper-container', {
  slidesPerView: 'auto',
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
var swiperBalconMin = new _swiperBundleEsmBrowserMin["default"]('.balcon-min-slider', {
  slidesPerView: 4,
  slidesPerGroup: 1,
  freeMode: false,
  loop: false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  spaceBetween: 30
});
var swiperBalcon = new _swiperBundleEsmBrowserMin["default"]('.balcon-slider', {
  loop: false,
  // spaceBetween: 5,
  thumbs: {
    swiper: swiperBalconMin
  }
}); // checkClassSlider();

modalCall.forEach(function (btn) {
  (0, _modal["default"])(btn, '.close');
});
(0, _closeBg["default"])('.modal-bg');
(0, _calc["default"])();
//# sourceMappingURL=main.dev.js.map
