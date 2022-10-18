// language=hbs
export default `<div class="profile-wrapper">
    <div class="profile-container">
        <div>
            {{> profile-image src="https://nukadeti.ru/content/images/essence/color/1390/2212.jpg" profileLabel="Пояльник" kind="img"}}
        </div>
        <div class="profile-elements-container">
            {{> profile-input profileLabel="Почта" profileValue="vvvvvv@mail.ru" kind="ghost-profile-input" disabled="disabled"}}
            {{> profile-input profileLabel="Логин" profileValue="Pojalnik" kind="ghost-profile-input" disabled="disabled"}}
            {{> profile-input profileLabel="Имя" profileValue="Ильдус" kind="ghost-profile-input" disabled="disabled"}}
            {{> profile-input profileLabel="Фамилия" profileValue="Хабиров" kind="ghost-profile-input" disabled="disabled"}}
            {{> profile-input profileLabel="Имя в чате" profileValue="Пояльник" kind="ghost-profile-input" disabled="disabled"}}
            {{> profile-input profileLabel="Телефон" profileValue="+7 (999) 999 99 99" kind="ghost-profile-input" disabled="disabled"}}
        </div>
        <div class="profile-button-container">
            {{> button label="Изменить данные" kind="ghost-button"}}
            {{> button label="Изменить пароль" kind="ghost-button"}}
            {{> button label="Выйти" kind="cancel-button"}}
        </div>
        
    </div>
</div>`;