import "../styles/main.scss";
import "../modules/nav-loading.js";
import "../modules/frontImage.js";
import image1 from "../../static/placeholder.jpg";
import image2 from "../../static/placeholder.jpg";
import image3 from "../../static/placeholder.jpg";

import * as bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.scss";
import { Color } from "three";

const left = document.getElementById("left");
const btnLeft = document.getElementById("btn-left");
const right = document.getElementById("right");
const btnRight = document.getElementById("btn-right");
const homeText = document.getElementById("heading-text");
const mainBtn = document.getElementById("main-btn");
const tourImage = document.getElementById("tour-image");
const tourImageBtn = document.querySelector(".tour-button");
const vimaiCarouselContainer = document.getElementById(
  "vimai-carousel-container"
);

vimaiCarouselContainer.innerHTML = `<div class="carousel slide" id="vimai-carousel" data-bs-ride="carousel">
    <div class="carousel-indicators"><button class="active" type="button" data-bs-target="#vimai-carousel" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#vimai-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#vimai-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button></div>
    <div class="carousel-inner" id="vimai-carousel-slides">
        <div class="carousel-item active">
          <img class="d-block w-100" src=${image1} alt="first slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src=${image2} alt="second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src=${image3} alt="third slide" />
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#vimai-carousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#vimai-carousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true">
          </span><span class="visually-hidden">Nexti</span></button>
    </div>
</div>`;

/*let slides = [image1, image2, image3];

for (const slide of slides) {
  const carouselItem = document.createElement("div");
  carouselItem.className = 'carousel-item';
  //carouselItem.className = 'active';
  const slideImg = document.createElement("img");

  
  slideImg.src = slide;
  slideImg.alt = slide;
  slideImg.className = 'd-block';
  slideImg.className = 'w-100';
 
  carouselItem.appendChild(slideImg);
  vimaiSlides.appendChild(carouselItem);
}



vimaiSlides.childNodes[3].className = 'active';*/

left.addEventListener("mouseenter", (e) => {
  btnLeft.classList.remove("magenta-outline");
  btnLeft.classList.add("magenta-btn");
});

left.addEventListener("mouseleave", (e) => {
  btnLeft.classList.remove("magenta-btn");
  btnLeft.classList.add("magenta-outline");
});

right.addEventListener("mouseenter", (e) => {
  btnRight.className = "btn btn-light";
});

right.addEventListener("mouseleave", (e) => {
  btnRight.className = "btn btn-outline-light";
});

homeText.addEventListener("mouseenter", (e) => {
  mainBtn.className = "btn btn-light";
});

homeText.addEventListener("mouseleave", (e) => {
  mainBtn.className = "btn btn-outline-light";
});

tourImage.addEventListener("mouseenter", (e) => {
  tourImageBtn.style.backgroundColor = "white";
  tourImageBtn.style.color = "black";
});

tourImage.addEventListener("mouseleave", (e) => {
  tourImageBtn.style.backgroundColor = "transparent";
  tourImageBtn.style.color = "white";
});

tourImage.style.backgroundImage = `url('pictures/Karaportti-Lobby.jpg')`;
tourImage.style.backgroundSize = "cover";
tourImage.style.backgroundPosition = "center";

$(".navbar").dynamicMenu();
