import '../styles/main.scss';
import '../modules/nav-loading.js';
import '../modules/tooltip.js';

const model = document.getElementById("metareal-tour");
const url = "https://tour-eu.metareal.com/apps/player?asset=f846831f-e2e2-4c90-bd4c-5f4088e9769b";
model.src = url;