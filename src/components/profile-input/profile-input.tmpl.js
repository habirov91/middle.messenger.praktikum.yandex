// language=hbs
export default `<div class="profile-input-container">
    <span>{{ profileLabel }}</span>
    <input id="{{id}}" class="{{kind}}" type="{{type}}" value="{{profileValue}}" {{disabled}}>
</div>`;