
import Header from './Header';
import Footer from './Footer'

//import '../App.css';


function App() {
  return (
    <>
      <div class="page">
        <Header/>

        <main class="content">
          <section class="profile">
            <div class="profile__container">
              <div class="profile__avatar-container">
                <img src="<%=require('./images/profile-avatar.jpg')%>" class="profile__avatar" alt="Аватар пользователя" />
              </div>
              <div class="profile__info">
                <div class="profile__row">
                  <h1 class="profile__name">Жак-Ив Кусто</h1>
                  <button aria-label="Редактировать профиль" class="profile__edit-button button" type="button"></button>
                </div>
                <p class="profile__description">Исследователь океана</p>
              </div>
            </div>
            <button aria-label="Добавить содержимое" class="profile__add-button button" type="button"></button>
          </section>
          <section class="cards">
            <ul class="cards__list">
            </ul>
          </section>
        </main>
        <Footer/>


        <div class="popup popup_type_profile">
          <div class="popup__container">
            <h2 class="popup__title">Редактировать профиль</h2>
            <button class="popup__close-button button" type="button"></button>
            <form class="popup__info popup__info popup__info_element_edit" name="formElement" novalidate>
              <fieldset class="popup__form-info">
                <label class="popup__label">
                  <input class="popup__form-input popup__form-input_name_title" id="name" type="text" name="titleInput"
                    placeholder="Имя" minlength="2" maxlength="40" required />
                  <span class="popup__form-input-error"></span>
                </label>
                <label class="popup__label">
                  <input class="popup__form-input popup__form-input_name_subtitle" id="text" type="text"
                    name="subtitleInput" placeholder="О себе" minlength="2" maxlength="200" required />
                  <span class="popup__form-input-error"></span>
                </label>
                <button class="popup__button-submit" type="submit">Сохранить</button>
              </fieldset>
            </form>
          </div>
        </div>
        <div class="popup popup_type_add" >
    //.id="popup_type_add"//
          <div class="popup__container">
            <h2 class="popup__title">Новое место</h2>
            <button class="popup__close-button button" type="button"></button>
            <form class="popup__info popup__info_element_add" name="formAddElement" id="formAddElement" novalidate>
              <fieldset class="popup__form-info">
                <label class="popup__label">
                  <input class="popup__form-input popup__form-input_name_heading" id="heading" type="text"
                    name="headingInput" placeholder="Название" minlength="2" maxlength="30" required />
                  <span class="popup__form-input-error"></span>
                </label>
                <label class="popup__label">
                  <input class="popup__form-input popup__form-input_name_link" id="link" type="url" name="linkInput"
                    placeholder="Ссылка на картинку" required />
                  <span class="popup__form-input-error"></span>
                </label>
                <button class="popup__button-submit" type="submit">Создать</button>
              </fieldset>
            </form>
          </div>
        </div>
        <div class="popup popup_type_delete" id="popup_type_delete">
          <div class="popup__container">
            <form class="popup__info popup__info_element_delete" name="formDeleteElement" id="formDeleteElement" novalidate>
              <h3 class="popup__title popup__title_delete">Вы уверены?</h3>
              <button class="popup__button-submit" type="submit">Да</button>
              <button class="popup__close-button button" type="button"></button>
            </form>
          </div>
        </div>
        <div class="popup popup_type_avatar">
          <div class="popup__container">
            <h2 class="popup__title">Обновить аватар</h2>
            <form class="popup__info popup__info_element_avatar" name="formEditAvatarElement" novalidate>
              <fieldset class="popup__form-info">
                <label class="popup__label">
                  <input class="popup__form-input popup__form-input_name_avatar" id="avatar" type="url" name="avatarInput"
                    placeholder="Ссылка на картинку" required />
                  <span class="popup__form-input-error"></span>
                </label>
                <button class="popup__button-submit" type="submit">Сохранить</button>
              </fieldset>
            </form>
            <button class="popup__close-button button" type="button"></button>
          </div>
        </div>
        <div class="popup popup_type_picture" id="popup_type_picture">
          <div class="popup__picture-container">
            <button class="popup__close-button button"></button>
            <div class="popup__figure">
              <img class="popup__picture" src="#" alt="" />
              <div class="popup__picture-text"></div>
            </div>
          </div>
        </div>
        <template id="cards-template">
          <li class="cards__card">
            <img src="#" class="cards__image" alt="" />
            <div class="cards__description">
              <h2 class="cards__description-title"></h2>
              <div class="cards__section-likes">
                <button aria-label="Нравится" class="cards__likes-button" type="button"></button>
                <p class="cards__likes-number"></p>
              </div>
              <button aria-label="Удалить" class="cards__delete-button button" type="button"></button>
            </div>
          </li>
        </template>
      </div>
    </>
  );
}

export default App;
