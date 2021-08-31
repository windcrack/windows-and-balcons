"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function calc() {
  var nexBtn1 = document.querySelector('.next-btn1');
  var nexBtn2 = document.querySelector('.next-btn2');
  var nexBtn3 = document.querySelector('.next-btn3');
  var nexBtn4 = document.querySelector('.next-btn4');
  var step1 = document.querySelector('.calck-oject');
  var step2 = document.querySelector('.calck-type-window');
  var step3 = document.querySelector('.calck-dimensions');
  var step4 = document.querySelector('.calck-summ');
  var step5 = document.querySelector('.calck-form');
  var objectValue = document.querySelectorAll('.oject-value');
  var windowValue = document.querySelectorAll('.window-value');
  var dimensionsValue = document.querySelectorAll('.dimensions-value');
  var summValue = document.querySelectorAll('.summ-value');

  function changeBlock(button, blockPrev, blockNext) {
    button.addEventListener('click', function () {
      blockPrev.style.display = 'none';
      blockNext.style.display = 'flex';
    });
  }

  function checkSelect(arrVal, button, blockPrev, blockNext) {
    arrVal.forEach(function (item) {
      item.addEventListener('input', function () {
        if (item.checked === true) {
          changeBlock(button, blockPrev, blockNext);
        }
      });
    });
  }

  checkSelect(objectValue, nexBtn1, step1, step2);
  checkSelect(windowValue, nexBtn2, step2, step3);
  checkSelect(dimensionsValue, nexBtn3, step3, step4);
  checkSelect(summValue, nexBtn4, step4, step5); // changeBlock(nexBtn3, step3, step4);
  // changeBlock(nexBtn4, step4, step5);
}

var _default = calc;
exports["default"] = _default;
//# sourceMappingURL=calc.dev.js.map
