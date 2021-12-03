import * as bootstrap from 'bootstrap';
import '../modules/nav-loading.js';
import '../styles/main.scss';
import '../modules/tooltip.js';
import {createCard} from '../modules/card';

createCard('tour');
$('.navbar').dynamicMenu();