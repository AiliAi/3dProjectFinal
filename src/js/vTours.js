import * as bootstrap from 'bootstrap';
import '../modules/nav-loading.js';
import '../styles/main.scss';
import '../modules/tooltip.js';
import {createCard} from '../modules/card';
import { gsap } from 'gsap'

createCard('tour');
$('.navbar').dynamicMenu();
gsap.from(".cards-container", {autoAlpha: 0, y:1, duration:1})