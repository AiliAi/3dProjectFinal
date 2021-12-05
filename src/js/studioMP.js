import '../styles/main.scss';
import '../modules/nav-loading.js';
import '../modules/tooltip.js';

const model = document.getElementById("mp-studio");
const url = "https://my.matterport.com/show/?m=pEbNwaqkErA&play=1";
model.src = url;