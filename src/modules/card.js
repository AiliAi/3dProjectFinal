import * as bootstrap from "bootstrap";
import '../styles/main.scss';
import { fetchGet } from "./fetchData";

const createCard = async (type) => {
  const data = await fetchGet();
  const cardsContainer = document.querySelector(".cards-container");

  //cardsContainer.innerHTML = "";

  for (const project of data.projects) {
    if (project.type === type) {
      const cardCol = document.createElement("div");
      cardCol.className = "col";

      const card = document.createElement("div");
      card.className = "card m-3 shadow border-0";

      const cardImage = document.createElement("div");
      cardImage.className = "card-img-top";
      //cardImage.alt = project.title;
      //cardImage.src = project.image;
      cardImage.style.backgroundImage = `url(${project.image})`;
      cardImage.classList.add('card-image');

      const cardLink = document.createElement('a');
      cardLink.href = project.link;
      cardLink.className = 'stretched-link';

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.innerText = project.title;

      const cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.innerText = project.description;

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      card.appendChild(cardImage);
      card.appendChild(cardBody);
      card.appendChild(cardLink);
      cardCol.appendChild(card);
      cardsContainer.appendChild(cardCol);

      card.addEventListener('mouseenter', e => {
        card.classList.add('card-zoom');
      });

      card.addEventListener('mouseleave', e => {
        card.classList.remove('card-zoom');
      });
    }

  }
};

export { createCard };
