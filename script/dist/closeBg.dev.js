"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function closeModalBg(bg) {
  var closeBg = document.querySelector(bg);
  closeBg.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-bg')) {
      this.classList.remove('show-flex');
      this.classList.add('hide');
    } else {
      return;
    }
  });
}

var _default = closeModalBg;
exports["default"] = _default;
//# sourceMappingURL=closeBg.dev.js.map
