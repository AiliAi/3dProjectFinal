import * as bootstrap from 'bootstrap';
import '../modules/nav-loading.js';
import '../styles/main.scss';
import '../modules/tooltip.js';
import {createCard} from '../modules/card';
import { gsap } from 'gsap'

createCard('model');
$('.navbar').dynamicMenu();

//gsap.to(".h1", {duration: 1, x: 500, ease: "none"});
gsap.from(".cards-container", {autoAlpha: 0, y:1, duration:1})
