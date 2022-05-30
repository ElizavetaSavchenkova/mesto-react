import React from "react";

function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="cards__card">
      <img src={card.link} className="cards__image" alt={card.name} onClick={handleCardClick} />
      <div className="cards__description">
        <h2 className="cards__description-title">{card.name}</h2>
        <div className="cards__section-likes">
          <button aria-label="Нравится" className="cards__likes-button" type="button"></button>
          <p className="cards__likes-number">{card.likes.length}</p>
        </div>
        <button aria-label="Удалить" className="cards__delete-button button" type="button" ></button>
      </div>
    </li>
  );
}

export default Card;
