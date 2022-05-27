import avatar from '../images/profile-avatar.jpg'

function Main({onEditAvatar}) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img src={avatar} className="profile__avatar" alt="Аватар пользователя" onClick={onEditAvatar} />
          </div>
          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button aria-label="Редактировать профиль" className="profile__edit-button button" type="button"></button>
            </div>
            <p className="profile__description">Исследователь океана</p>
          </div>
        </div>
        <button aria-label="Добавить содержимое" className="profile__add-button button" type="button"></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
        </ul>
      </section>

    </main>
  )
}

export default Main

