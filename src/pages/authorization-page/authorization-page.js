// language=hbs
export default `<div class="authorization-wrapper">
    <div class="authorization-container">
        
        <span class="authorization-page-title">Вход</span>
        
        <div class="authorization-elements-container">
            {{> input kind="ghost-input" label="Логин"}}
            {{> input kind="ghost-input" label="Пароль" type="password"}}
        </div>
        
        <div  class="authorization-elements-container">
            {{> button label="Авторизоваться" kind="standard-button"}}
            {{> button label="Нет аккаунта?" kind="ghost-button"}}
        </div>
        
    </div>
</div>`;