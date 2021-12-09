import * as bootstrap from 'bootstrap';
import '../modules/nav-loading.js';
import '../styles/main.scss';
import '../modules/tooltip.js';
import {createCard} from '../modules/card';
import { gsap } from 'gsap'



const cardsContainer = document.querySelector(".cards-container");

const allModelsBtn = document.getElementById('models-btn');
const lidarBtn = document.getElementById('lidar-btn');
const photogrammetryBtn = document.getElementById('photogrammetry-btn');

createCard('model');

allModelsBtn.addEventListener("click", () => {
  cardsContainer.innerHTML = " ";
  photogrammetryBtn.className = 'btn btn-primary';
  lidarBtn.className = 'btn btn-primary'
  allModelsBtn.className = 'btn btn-primary active';
  createCard('model');
 
});

lidarBtn.addEventListener("click", () => {
  allModelsBtn.className = 'btn btn-primary';
  photogrammetryBtn.className = 'btn btn-primary';
  lidarBtn.className = 'btn btn-primary active';
  cardsContainer.innerHTML = " ";
  createCard('lidar');
});

photogrammetryBtn.addEventListener("click", () => {
  cardsContainer.innerHTML = " ";
  allModelsBtn.className = 'btn btn-primary';
  lidarBtn.className = 'btn btn-primary';
  photogrammetryBtn.className = 'btn btn-primary active';
  createCard('photogrammetry');
});





$('.navbar').dynamicMenu();

//gsap.to(".h1", {duration: 1, x: 500, ease: "none"});
gsap.from(".cards-container", {autoAlpha: 0, y:1, duration:1})
