import '../styles/main.scss';
import '../modules/nav-loading.js';
import '../modules/tooltip.js';
import pic1 from '../../static/pictures/meshlab.jpg';
import pic2 from '../../static/pictures/em3d.jpg';

//Adds pic1 image
  const containerPic1 = document.querySelector('#pic1');
  const imgPic1 = document.createElement('img');
  imgPic1.src = pic1;
  imgPic1.alt = 'meshlab example';
  imgPic1.className = 'compare-img';
  containerPic1.appendChild(imgPic1);

//Adds pic2 image
const containerPic2 = document.querySelector('#pic2');
const imgPic2 = document.createElement('img');
imgPic2.src = pic2;
imgPic2.alt = 'meshlab example';
imgPic2.className = 'compare-img';
containerPic2.appendChild(imgPic2);