"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function closeModalBg(bg) {
  var closeBg = document.querySelector(bg);
  closeBg.addEventListener('click', function () {
    this.classList.remove('show-flex');
    this.classList.add('hide');
  });
}

var _default = closeModalBg;
exports["default"] = _default;
//# sourceMappingURL=closeBg.dev.js.map
