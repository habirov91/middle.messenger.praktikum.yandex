// language=hbs
export default `<div class="profile-wrapper">
    <div class="profile-container">
        <div>
            {{> profile-image src="https://nukadeti.ru/content/images/essence/color/1390/2212.jpg" profileLabel="Пояльник" kind="img"}}
        </div>
        <div class="profile-elements-container">
            {{> profile-input profileLabel="Почта" profileValue="vvvvvv@mail.ru" kind="ghost-profile-input"}}
            {{> profile-input profileLabel="Логин" profileValue="Pojalnik" kind="ghost-profile-input"}}
            {{> profile-input profileLabel="Имя" profileValue="Ильдус" kind="ghost-profile-input"}}
            {{> profile-input profileLabel="Фамилия" profileValue="Хабиров" kind="ghost-profile-input"}}
            {{> profile-input profileLabel="Имя в чате" profileValue="Паяльник" kind="ghost-profile-input"}}
            {{> profile-input profileLabel="Телефон" profileValue="+7 (999) 999 99 99" kind="ghost-profile-input"}}
        </div>
        <div class="profile-button-container">
            {{> button label="Сохранить" kind="standard-button"}}
        </div>
        
    </div>
</div>`;