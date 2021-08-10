/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var numero = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  var pinta = ["♦", "♥", "♠", "♣"];
  var randnumero = numero[Math.floor(Math.random() * numero.length)];
  var randpinta = pinta[Math.floor(Math.random() * pinta.length)];
  console.log(randpinta, randnumero, randpinta);
  var up = document.querySelector(".up");
  up.innerHTML = randpinta;
  var middle = document.querySelector(".middle");
  middle.innerHTML = randnumero;
  var down = document.querySelector(".down");
  down.innerHTML = randpinta;
};
