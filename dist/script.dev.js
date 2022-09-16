"use strict";

var bar = document.getElementById('bar');
var nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', function () {
    nav.classList.add('active');
  });
}