import '../styles/main.scss';
import '../modules/nav-loading.js';
import '../modules/tooltip.js';
import QR from '../../static/pictures/QR_mywebar.png';

//Adds QR code image
const imageTest = document.querySelector('.my-ar');
imageTest.style.height = '420px';
const QRimg = document.createElement('img');
QRimg.src = QR;
QRimg.alt = 'QR code';
QRimg.className = "my-qr-code";
QRimg.style.width = '250px';
imageTest.appendChild(QRimg);

const myMargin= document.querySelector('.my-margin');
myMargin.style.marginBottom = '-5em';