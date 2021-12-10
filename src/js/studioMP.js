import '../styles/main.scss';
import '../modules/nav-loading.js';
import '../modules/tooltip.js';
import image1 from "../../static/guide/first.jpg";
import image2 from "../../static/guide/second.jpg";
import image3 from "../../static/guide/third.jpg";
import image4 from "../../static/guide/fourth.jpg";
import image5 from "../../static/guide/fifth.jpg";
import image6 from "../../static/guide/sixth.jpg";
import image7 from "../../static/guide/seventh.jpg";

const model = document.getElementById("mp-studio");
const url = "https://my.matterport.com/show/?m=pEbNwaqkErA&play=1";
model.src = url;

const carouselContainer = document.getElementById('studio-guide-carousel-container');

carouselContainer.innerHTML = `
<div class="carousel slide" id="studio-guide-carousel" data-bs-ride="carousel">
    <div class="carousel-indicators">
    <button class="active" type="button" data-bs-target="#studio-guide-carousel" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#studio-guide-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#studio-guide-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#studio-guide-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#studio-guide-carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#studio-guide-carousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#studio-guide-carousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
</div>
    <div class="carousel-inner">
        <div class="carousel-item active"><img class="d-block w-100" src=${image1} alt="first slide" /></div>
        <div class="carousel-item"><img class="d-block w-100" src=${image2} alt="second slide" /></div>
        <div class="carousel-item"><img class="d-block w-100" src=${image3} alt="third slide" /></div>
        <div class="carousel-item"><img class="d-block w-100" src=${image4} alt="fourth slide" /></div>
        <div class="carousel-item"><img class="d-block w-100" src=${image5} alt="fifth slide" /></div>
        <div class="carousel-item"><img class="d-block w-100" src=${image6} alt="sixth slide" /></div>
        <div class="carousel-item"><img class="d-block w-100" src=${image7} alt="seventh slide" /></div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#studio-guide-carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#studio-guide-carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
</div>
`;

