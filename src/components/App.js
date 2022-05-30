
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
    Promise.all([api.getUserInformation(), api.getAllCards()])
      .then(([data, cards]) => {
        setCurrentUser(data);
        setCards(cards)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          onAddPlace={handleAddPlaceClick}
          cards={cards}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm
          name={"avatar"}
          title={"Обновить аватар"}
          isOpen={IsEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText={"Сохранить"}>
          <label className="popup__label">
            <input className="popup__form-input popup__form-input_name_avatar" id="avatar" type="url" name="avatarInput"
              placeholder="Ссылка на картинку" required />
            <span className="popup__form-input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name={"profile"}
          title={"Редактировать профиль"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText={"Сохранить"}>
          <label className="popup__label">
            <input className="popup__form-input popup__form-input_name_title" id="name" type="text" name="titleInput"
              placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="popup__form-input-error"></span>
          </label>
          <label className="popup__label">
            <input className="popup__form-input popup__form-input_name_subtitle" id="text" type="text"
              name="subtitleInput" placeholder="О себе" minLength="2" maxLength="200" required />
            <span className="popup__form-input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name={"add"}
          title={"Новое место"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText={"Создать"}>
          <label className="popup__label">
            <input className="popup__form-input popup__form-input_name_heading" id="heading" type="text"
              name="headingInput" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__form-input-error"></span>
          </label>
          <label className="popup__label">
            <input className="popup__form-input popup__form-input_name_link" id="link" type="url" name="linkInput"
              placeholder="Ссылка на картинку" required />
            <span className="popup__form-input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name={"delete"}
          title={"Вы уверены?"}
          isOpen={false}
          onClose={closeAllPopups}
          buttonText={"Да"}>
        </PopupWithForm>
      </div>
    </>
  );
}

export default App;
