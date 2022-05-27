import React from 'react';

function PopupWithForm({ name, title, children, isOpen }) {
  return (
    <>
      <div className={`popup popup_type_${name} ${isOpen ? 'popup_is-opened' : ""}`} >
        <div className="popup__container">
          <h2 className="popup__title">{title}</h2>
        </div>
      </div>
    </>
  )
}

export default PopupWithForm

//<button className="popup__close-button button" type="button"></button>
//<form className={`popup__info popup__info_element_${name}`} name={`form-${name}`} noValidate>
  //{props.children}
  //<button className="popup__button-submit" type="submit">{props.buttonText}</button>
//</form>
//</div>
//</div>
