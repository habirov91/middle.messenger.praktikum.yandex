// language=hbs
export default `
    <div style="display: flex; flex-direction: column; gap: 50px">
        {{> authorization-page }}
        {{> registration-page }}
        {{> error-page }}
        {{> profile-page }}
        {{> profile-change-page }}
        {{> password-change-page }}
    </div>
`;