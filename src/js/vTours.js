import * as bootstrap from 'bootstrap';
import '../modules/nav-loading.js';
import '../styles/main.scss';
import '../modules/tooltip.js';
import {createCard} from '../modules/card';
import { gsap } from 'gsap'
import '../modules/scrollUp.js';


const cardsContainer = document.querySelector(".cards-container");
const allToursBtn = document.getElementById("tours-btn");
const virtualToursBtn = document.getElementById("virtual-tours-btn");
const panoramasBtn = document.getElementById("panoramas-btn");

createCard("tour");

allToursBtn.addEventListener("click", () => {
  cardsContainer.innerHTML = " ";
  panoramasBtn.classList.remove("blue-btn-active");
  virtualToursBtn.classList.remove("blue-btn-active");
  allToursBtn.classList.add("blue-btn-active");
  createCard("tour");
});

virtualToursBtn.addEventListener("click", () => {
  allToursBtn.classList.remove("blue-btn-active");
  panoramasBtn.classList.remove("blue-btn-active");
  virtualToursBtn.classList.add("blue-btn-active");
  cardsContainer.innerHTML = " ";
  createCard("vtour");
});

panoramasBtn.addEventListener("click", () => {
  cardsContainer.innerHTML = " ";
  allToursBtn.classList.remove("blue-btn-active");
  virtualToursBtn.classList.remove("blue-btn-active");
  panoramasBtn.classList.add("blue-btn-active");
  createCard("panorama");
});








$('.navbar').dynamicMenu();
gsap.from(".cards-container", {autoAlpha: 0, y:1, duration:1})