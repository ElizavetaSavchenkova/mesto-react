

import Header from './Header';
import Footer from './Footer'
import Main from './Main'



function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />

        <div className="popup popup_type_profile">
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <button className="popup__close-button button" type="button"></button>
            <form className="popup__info popup__info popup__info_element_edit" name="formElement" novalidate>
              <fieldset className="popup__form-info">
                <label className="popup__label">
                  <input className="popup__form-input popup__form-input_name_title" id="name" type="text" name="titleInput"
                    placeholder="Имя" minlength="2" maxlength="40" required />
                  <span className="popup__form-input-error"></span>
                </label>
                <label className="popup__label">
                  <input className="popup__form-input popup__form-input_name_subtitle" id="text" type="text"
                    name="subtitleInput" placeholder="О себе" minlength="2" maxlength="200" required />
                  <span className="popup__form-input-error"></span>
                </label>
                <button className="popup__button-submit" type="submit">Сохранить</button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="popup popup_type_add" >
    //.id="popup_type_add"//
          <div className="popup__container">
            <h2 className="popup__title">Новое место</h2>
            <button className="popup__close-button button" type="button"></button>
            <form className="popup__info popup__info_element_add" name="formAddElement" id="formAddElement" novalidate>
              <fieldset className="popup__form-info">
                <label className="popup__label">
                  <input className="popup__form-input popup__form-input_name_heading" id="heading" type="text"
                    name="headingInput" placeholder="Название" minlength="2" maxlength="30" required />
                  <span className="popup__form-input-error"></span>
                </label>
                <label className="popup__label">
                  <input className="popup__form-input popup__form-input_name_link" id="link" type="url" name="linkInput"
                    placeholder="Ссылка на картинку" required />
                  <span className="popup__form-input-error"></span>
                </label>
                <button className="popup__button-submit" type="submit">Создать</button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="popup popup_type_delete" id="popup_type_delete">
          <div className="popup__container">
            <form className="popup__info popup__info_element_delete" name="formDeleteElement" id="formDeleteElement" novalidate>
              <h3 className="popup__title popup__title_delete">Вы уверены?</h3>
              <button className="popup__button-submit" type="submit">Да</button>
              <button className="popup__close-button button" type="button"></button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_avatar">
          <div className="popup__container">
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__info popup__info_element_avatar" name="formEditAvatarElement" novalidate>
              <fieldset className="popup__form-info">
                <label className="popup__label">
                  <input className="popup__form-input popup__form-input_name_avatar" id="avatar" type="url" name="avatarInput"
                    placeholder="Ссылка на картинку" required />
                  <span className="popup__form-input-error"></span>
                </label>
                <button className="popup__button-submit" type="submit">Сохранить</button>
              </fieldset>
            </form>
            <button className="popup__close-button button" type="button"></button>
          </div>
        </div>
        <div className="popup popup_type_picture" id="popup_type_picture">
          <div className="popup__picture-container">
            <button className="popup__close-button button"></button>
            <div className="popup__figure">
              <img className="popup__picture" src="#" alt="" />
              <div className="popup__picture-text"></div>
            </div>
          </div>
        </div>
        <template id="cards-template">
          <li className="cards__card">
            <img src="#" className="cards__image" alt="" />
            <div className="cards__description">
              <h2 className="cards__description-title"></h2>
              <div className="cards__section-likes">
                <button aria-label="Нравится" className="cards__likes-button" type="button"></button>
                <p className="cards__likes-number"></p>
              </div>
              <button aria-label="Удалить" className="cards__delete-button button" type="button"></button>
            </div>
          </li>
        </template>
      </div>
    </>
  );
}

export default App;
