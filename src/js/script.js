import "../styles/main.scss";
import "../modules/nav-loading.js";
import "../modules/frontImage.js";
import '../modules/scrollUp.js';
import * as bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.scss";
import { Color } from "three";

const left = document.getElementById("left");
const btnLeft = document.getElementById("btn-left");
const right = document.getElementById("right");
const btnRight = document.getElementById("btn-right");
const homeText = document.getElementById("heading-text");
const mainBtn = document.getElementById("main-btn");
const tourImage = document.getElementById("tour-image");
const tourImageBtn = document.querySelector(".tour-button");

left.addEventListener("mouseenter", (e) => {
  btnLeft.classList.remove("magenta-outline");
  btnLeft.classList.add("magenta-btn");
});

left.addEventListener("mouseleave", (e) => {
  btnLeft.classList.remove("magenta-btn");
  btnLeft.classList.add("magenta-outline");
});

right.addEventListener("mouseenter", (e) => {
  btnRight.className = "btn btn-light";
});

right.addEventListener("mouseleave", (e) => {
  btnRight.className = "btn btn-outline-light";
});

homeText.addEventListener("mouseenter", (e) => {
  mainBtn.className = "btn btn-light";
});

homeText.addEventListener("mouseleave", (e) => {
  mainBtn.className = "btn btn-outline-light";
});

tourImage.addEventListener("mouseenter", (e) => {
  tourImageBtn.style.backgroundColor = "white";
  tourImageBtn.style.color = "black";
});

tourImage.addEventListener("mouseleave", (e) => {
  tourImageBtn.style.backgroundColor = "transparent";
  tourImageBtn.style.color = "white";
});

tourImage.style.backgroundImage = `url('pictures/Karaportti-Lobby.jpg')`;
tourImage.style.backgroundSize = "cover";
tourImage.style.backgroundPosition = "center";

$(".navbar").dynamicMenu();
