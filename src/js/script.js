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

left.addEventListener('mouseenter', e => {
  btnLeft.className = 'btn btn-info'
});

left.addEventListener('mouseleave', e => {
  btnLeft.className = 'btn btn-outline-info'
});

right.addEventListener('mouseenter', e => {
  btnRight.className = 'btn btn-light'
});

right.addEventListener('mouseleave', e => {
  btnRight.className = 'btn btn-outline-light'
});

homeText.addEventListener('mouseenter', e => {
  mainBtn.className = 'btn btn-info'
});

homeText.addEventListener('mouseleave', e => {
  mainBtn.className = 'btn btn-outline-info'
});

$('.navbar').dynamicMenu();






