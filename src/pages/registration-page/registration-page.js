// language=hbs
export default `<div class="registration-wrapper">
    <div class="registration-container">
        
        <span class="registration-page-title">Регистрация</span>
        
        <div class="elements-container">
            {{> input kind="ghost-input" label="Почта"}}
            {{> input kind="ghost-input" label="Логин"}}
            {{> input kind="ghost-input" label="Имя"}}
            {{> input kind="ghost-input" label="Фамилия"}}
            {{> input kind="ghost-input" label="Телефон"}}
            {{> input kind="ghost-input" label="Пароль" type="password"}}
            {{> input kind="ghost-input" label="Пароль (еще раз)"  type="password"}}
        </div>
        
        <div  class="registration-elements-container">
            {{> button label="Зарегистрироваться" kind="standard-button"}}
            {{> button label="Войти" kind="ghost-button"}}
        </div>
        
    </div>
</div>`;