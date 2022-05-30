import React from 'react';

function PopupWithForm({ name, title, children, isOpen, onClose }) {
  return (
    <>
      <div className={`popup popup_type_${name} ${isOpen ? 'popup_is-opened' : ""}`} >
        <div className="popup__container">
          <h2 className="popup__title">{title}</h2>
          <button class="popup__close-button button" type="button" onClick={onClose}></button>
          <form class="popup__info popup__info_element_edit" name="formElement" novalidate>
            <fieldset class="popup__form-info">
              {children}
              <button class="popup__button-submit" type="submit">Создать</button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  )
}

export default PopupWithForm
