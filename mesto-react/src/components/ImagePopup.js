import React from 'react'

function ImagePopup({card, onClose}){
  return(
<div className={`popup popup_type_picture ${card.link && "popup_is-opened"}`} id="popup_type_picture">
      <div class="popup__picture-container">
        <button class="popup__close-button button" onClick={onClose}></button>
        <div class="popup__figure">
          <img class="popup__picture" src={`${card.link}`}  alt=""/>
          <div class="popup__picture-text">{card.name}</div>
        </div>
      </div>
    </div>
  )
}

export default ImagePopup;

