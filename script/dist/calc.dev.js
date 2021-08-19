"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function calc() {
  var summTotal = document.querySelector('.summ-total b'); // Object

  var ojects = document.querySelectorAll('.oject-value'); // window

  var windows = document.querySelectorAll('.widow-value'); // size

  var size = document.querySelectorAll('.size');
  var width = document.querySelector('.dimensions-windth');
  var height = document.querySelector('.dimensions-height'); // 

  var orientSumm,
      summDimensions,
      objectValue = 0,
      windowValue = 0; // convert to string

  var strToNumber = function strToNumber(str) {
    return str.value ? parseInt(str.value) : 0;
  }; // size input for


  size.forEach(function (input) {
    input.addEventListener('input', function () {
      calcTotalDim();
    });
  }); // oject select for

  ojects.forEach(function (objectSelect) {
    objectSelect.addEventListener('click', function () {
      if (objectSelect.checked == true) {
        objectValue = strToNumber(objectSelect);
      } else {
        objectValue = 0;
      }

      calcTotalDim();
    });
  }); // window select for

  windows.forEach(function (windowSelect) {
    parseInt(windowSelect.value);
    windowSelect.addEventListener('click', function () {
      if (windowSelect.checked == true) {
        windowValue = strToNumber(windowSelect);
      } else {
        windowValue = 0;
      }

      calcTotalDim();
    });
  });

  var calcTotalDim = function calcTotalDim() {
    summDimensions = (strToNumber(width) + strToNumber(height)) / 10;
    oreientSumm();
  };

  var oreientSumm = function oreientSumm() {
    console.log(objectValue, windowValue);
    orientSumm = objectValue + windowValue + summDimensions;
    summTotal.textContent = orientSumm.toFixed();
  };
}

var _default = calc;
exports["default"] = _default;
//# sourceMappingURL=calc.dev.js.map
