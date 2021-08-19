"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function checked(inputClass) {
  var input = document.querySelector(inputClass);
  var label = document.querySelectorAll('.object-item')[0];

  if (input.checked == true) {
    label.classList.toggle('border');
  }
}

var _default = checked;
exports["default"] = _default;
//# sourceMappingURL=cheked.dev.js.map
