import * as styles from './input.module.scss';

export const template = `
<input 
    class='${styles.standard} {{#if error}}${styles.error}{{/if}}' 
    type='{{ type }}'
    name='{{ name }}' 
    placeholder='{{ placeholder }}'
    value='{{ value }}' 
/>
`;
