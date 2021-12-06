import '../styles/main.scss';
import '../modules/nav-loading.js';
import '../modules/frontImage.js';


import * as bootstrap from 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.scss';

const left = document.getElementById('left');
const btnLeft = document.getElementById('btn-left');
const right = document.getElementById('right');
const btnRight = document.getElementById('btn-right');
const homeText = document.getElementById('heading-text');
const mainBtn = document.getElementById('main-btn');
const tourImage = document.getElementById('tour-image');
const tourImageBtn = document.getElementById('tour-button');


left.addEventListener('mouseenter', e => {
  classList.remove('blue-outline');
  btnLeft.classList.add('blue-btn');
  
});

left.addEventListener('mouseleave', e => {
  btnLeftclassList.remove('blue-btn');
  btnLeft.classList.add('blue-outline');
});

right.addEventListener('mouseenter', e => {
  btnRight.className = 'btn btn-light'
});

right.addEventListener('mouseleave', e => {
  btnRight.className = 'btn btn-outline-light'
});

homeText.addEventListener('mouseenter', e => {
  mainBtn.className ='btn btn-light';
});

homeText.addEventListener('mouseleave', e => {
  mainBtn.className ='btn btn-outline-light'
  
});

tourImage.addEventListener('mouseenter', e => {
  tourImageBtn.className ='btn btn-light';
});

tourImage.addEventListener('mouseleave', e => {
  tourImageBtn.classList.add('blue-btn');
  
});






tourImage.style.backgroundImage = `url('pictures/Karaportti-Lobby.jpg')`;
tourImage.style.backgroundSize = 'cover';
tourImage.style.backgroundPosition = 'center';


$('.navbar').dynamicMenu();







