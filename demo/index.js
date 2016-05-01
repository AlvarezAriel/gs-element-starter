'use strict';

var seedElement = document.querySelector('gs-element-starter');

document.querySelector('#saybtn').addEventListener('click', function () {
  alert(seedElement.sayHello('Hallo!'));
});

document.querySelector('#laserbtn').addEventListener('click', function () {
  seedElement.fireLasers();
});

document.addEventListener("gs-element-starter-lasers", function (e) {
  console.log(e.detail.sound);
});