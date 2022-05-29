import React from "react";

function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (

      <li class="cards__card">
        <img src={card.link} class="cards__image" alt="" onClick={handleCardClick}/>
        <div class="cards__description">
          <h2 class="cards__description-title">{card.name}</h2>
          <div class="cards__section-likes">
            <button aria-label="Нравится" class="cards__likes-button" type="button"></button>
            <p class="cards__likes-number">{card.likes.length}</p>
          </div>
          <button aria-label="Удалить" class="cards__delete-button button" type="button" ></button>
        </div>
      </li>

  );
}

export default Card;
