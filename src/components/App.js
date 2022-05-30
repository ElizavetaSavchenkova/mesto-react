
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer'
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api';
import ImagePopup from './ImagePopup';


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
      });
  });

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
          userAvatar={currentUser.avatar}
          userDescription={currentUser.about}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAdd={handleAddPlaceClick}
          cards={cards}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm
          name={"avatar"}
          title={"Обновить аватар"}
          isOpen={IsEditAvatarPopupOpen}
          onClose={closeAllPopups}>
          <label class="popup__label">
            <input class="popup__form-input popup__form-input_name_avatar" id="avatar" type="url" name="avatarInput"
              placeholder="Ссылка на картинку" required />
            <span class="popup__form-input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name={"profile"}
          title={"Редактировать профиль"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
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
        </PopupWithForm>
        <PopupWithForm
          name={"add"}
          title={"Добавить содержимое"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
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
        </PopupWithForm>
      </div>
    </>
  );
}

export default App;
