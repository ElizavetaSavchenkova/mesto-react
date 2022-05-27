
import {useState} from 'react';
import Header from './Header';
import Footer from './Footer'
import Main from './Main';
import PopupWithForm from './PopupWithForm';

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
//попробовать открыть попап с аватаркой
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
        onEditAvatar={handleEditAvatarClick}/>
        <Footer />
        <PopupWithForm
        name={"add"}
        title={"Обновить аватар"}
        isOpen={IsEditAvatarPopupOpen}
        />

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
