import avatar from '../images/profile-avatar.jpg';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAdd, userName, userAvatar, userDescription, cards }) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img src={userAvatar} className="profile__avatar" alt="Аватар пользователя" onClick={onEditAvatar} />
          </div>
          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__name">{userName}</h1>
              <button aria-label="Редактировать профиль" className="profile__edit-button button" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button aria-label="Добавить содержимое" className="profile__add-button button" type="button" onClick={onAdd}></button>
      </section>
      <section class="cards">
        <ul class="cards__list">
        {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
              />
            );
          })}
        </ul>
      </section>
    </main>
  )
}

export default Main

