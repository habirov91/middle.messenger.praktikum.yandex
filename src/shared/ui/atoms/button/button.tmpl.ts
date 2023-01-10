import * as classes from './button.module.scss';

export const template = `
<button 
    class='${classes.btn}{{#if transparent}} ${classes.transparent}{{/if}}'
    type='{{ type }}'
>
    {{ content }}
</button>
`;
