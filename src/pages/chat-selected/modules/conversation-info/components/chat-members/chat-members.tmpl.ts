import * as classes from './chat-members.module.scss';

export default `
<div
    class=${classes.members}
>
    {{ form }}
    {{#each members}}
        {{ this }}
    {{/each}}
</div>
`;
