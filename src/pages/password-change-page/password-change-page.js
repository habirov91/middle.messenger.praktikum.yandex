// language=hbs
export default `<div class="profile-wrapper">
    <div class="profile-container">
        <div>
            {{> profile-image src="https://nukadeti.ru/content/images/essence/color/1390/2212.jpg" profileLabel="Пояльник" kind="img"}}
        </div>
        <div class="profile-elements-container">
            {{> profile-input profileLabel="Старый пароль" kind="ghost-profile-input" type="password"}}
            {{> profile-input profileLabel="Новый пароль" kind="ghost-profile-input" type="password"}}
            {{> profile-input profileLabel="Повторите новый пароль" kind="ghost-profile-input" type="password"}}
        </div>
        <div class="profile-button-container">
            {{> button label="Сохранить" kind="standard-button"}}
        </div>
        
    </div>
</div>`;