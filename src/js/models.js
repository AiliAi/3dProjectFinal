import * as bootstrap from "bootstrap";
import "../modules/nav-loading.js";
import "../styles/main.scss";
import "../modules/tooltip.js";
import { createCard } from "../modules/card";
import { gsap } from "gsap";

const cardsContainer = document.querySelector(".cards-container");
const allModelsBtn = document.getElementById("models-btn");
const lidarBtn = document.getElementById("lidar-btn");
const photogrammetryBtn = document.getElementById("photogrammetry-btn");
const depthBtn = document.getElementById("depth-btn");

createCard("model");

allModelsBtn.addEventListener("click", () => {
  cardsContainer.innerHTML = " ";
  photogrammetryBtn.classList.remove("blue-btn-active");
  lidarBtn.classList.remove("blue-btn-active");
  depthBtn.classList.remove("blue-btn-active");
  allModelsBtn.classList.add("blue-btn-active");
  createCard("model");
});

lidarBtn.addEventListener("click", () => {
  allModelsBtn.classList.remove("blue-btn-active");
  photogrammetryBtn.classList.remove("blue-btn-active");
  depthBtn.classList.remove("blue-btn-active");
  lidarBtn.classList.add("blue-btn-active");
  cardsContainer.innerHTML = " ";
  createCard("lidar");
});

photogrammetryBtn.addEventListener("click", () => {
  cardsContainer.innerHTML = " ";
  allModelsBtn.classList.remove("blue-btn-active");
  lidarBtn.classList.remove("blue-btn-active");
  depthBtn.classList.remove("blue-btn-active");
  photogrammetryBtn.classList.add("blue-btn-active");
  createCard("photogrammetry");
});

depthBtn.addEventListener("click", () => {
  cardsContainer.innerHTML = " ";
  allModelsBtn.classList.remove("blue-btn-active");
  lidarBtn.classList.remove("blue-btn-active");
  photogrammetryBtn.classList.remove("blue-btn-active");
  depthBtn.classList.add("blue-btn-active");
  createCard("depth");
});

$(".navbar").dynamicMenu();

//gsap.to(".h1", {duration: 1, x: 500, ease: "none"});
gsap.from(".cards-container", { autoAlpha: 0, y: 1, duration: 1 });
