import '../modules/nav-loading.js';
import '../styles/main.scss';
import '../modules/tooltip.js';
import '../modules/scrollUp.js';
import { gsap } from 'gsap'

$('.navbar').dynamicMenu();
gsap.from(".container", {autoAlpha: 0, y:1, duration:1})
