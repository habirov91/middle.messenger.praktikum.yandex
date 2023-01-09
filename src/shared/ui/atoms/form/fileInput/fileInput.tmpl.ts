import * as classes from './fileInput.module.scss';

export default `
<input 
    class='${classes.input} {{#if error}}${classes.inputError}{{/if}}' 
    type='file'
    name='{{ name }}' 
    placeholder='{{ label }}'
/>
`;
