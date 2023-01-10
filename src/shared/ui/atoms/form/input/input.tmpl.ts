import * as classes from './input.module.scss';

export default `
<input 
    class='${classes.input} {{#if error}}${classes.inputError}{{/if}}' 
    type='{{ type }}'
    name='{{ name }}' 
    placeholder='{{ placeholder }}'
    value='{{ value }}' 
/>
`;
