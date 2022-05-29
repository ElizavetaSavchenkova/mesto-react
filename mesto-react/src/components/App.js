
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer'
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api';

const popupEditElement = document.querySelector('.popup_type_profile');
const popupAddElement = document.querySelector('.popup_type_add');
const popupAvatar = document.querySelector('.popup_type_avatar');

//const popupFormEditElement = popupEditElement.querySelector('.popup__info_element_edit');
//const popupFormAddElement = popupAddElement.querySelector('.popup__info_element_add');
//const popupFormAvatar = popupAvatar.querySelector('.popup__info_element_avatar');

const Avatar = document.querySelector('.profile__avatar');

//const titleInput = popupFormEditElement.querySelector('.popup__form-input_name_title');
//const subtitleInput = popupFormEditElement.querySelector('.popup__form-input_name_subtitle');
//const headingInput = popupFormAddElement.querySelector('.popup__form-input_name_heading');
//const linkInput = popupFormAddElement.querySelector('.popup__form-input_name_link');

//const profileName = document.querySelector('.profile__name');
//const profileDescription = document.querySelector('.profile__description');

const popupEditOpenButtonElement = document.querySelector('.profile__edit-button');
const popupAddOpenButtonElement = document.querySelector('.profile__add-button');

function App() {
  const [IsEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});


  useEffect(() => {
    api.getUserInformation()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });;
  }, []);

  useEffect(() => {
    api.getAllCards()
      .then((cards) => {
        setCards(cards)
      })
      .catch((err) => {
        console.log(err);
      });
    });

  //попробовать открыть попап с аватаркой
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setisAddPlacePopupOpen(false)
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }


  return (
    <>
      <div className="page">
        <Header />
        <Main
          userName={currentUser.name}
          userAvatar={currentUser.Avatar}
          userDescription={currentUser.about}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAdd={handleAddPlaceClick}
          cards={cards}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name={"avatar"}
          title={"Обновить аватар"}
          isOpen={IsEditAvatarPopupOpen}
          onClose={closeAllPopups}>
          <fieldset class="popup__form-info">
            <label class="popup__label">
              <input class="popup__form-input popup__form-input_name_avatar" id="avatar" type="url" name="avatarInput"
                placeholder="Ссылка на картинку" required />
              <span class="popup__form-input-error"></span>
            </label>
            <button class="popup__button-submit" type="submit">Сохранить</button>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          name={"profile"}
          title={"Редактировать профиль"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
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
        </PopupWithForm>
        <PopupWithForm
          name={"add"}
          title={"Добавить содержимое"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
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
        </PopupWithForm>
      </div>

    </>
  );
}

export default App;

//const ButtonEditProfile = document.
//handleEditAvatarClick;



//function handleEditProfileClick() {
  //popupEditElement.classList.add('popup_is-opened');
//};

//popupEditOpenButtonElement.addEventListener('click', handleEditProfileClick)
//handleAddPlaceClick;

//function handleAddPlaceClick() {
  //popupAddElement.classList.add('popup_is-opened')
//}

//popupAddOpenButtonElement.addEventListener('click', handleAddPlaceClick)


 // popupAvatar.classList.add('popup_is-opened')
//}

//Avatar.addEventListener('click', handleEditAvatarClick)
