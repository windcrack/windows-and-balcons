"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function modal(open, close) {
  var callButton = document.querySelector(open);
  var closeButton = document.querySelector(close);
  callButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
}

function openModal() {
  var modal = document.querySelector('.modal-bg');
  modal.classList.toggle('show-flex');
  modal.classList.toggle('hide');
}

function closeModal() {
  var modal = document.querySelector('.modal-bg');
  modal.classList.toggle('show-flex');
  modal.classList.toggle('hide');
}

var _default = modal;
exports["default"] = _default;
//# sourceMappingURL=modal.dev.js.map
