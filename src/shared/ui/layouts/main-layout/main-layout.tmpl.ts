import * as classes from './main-layout.module.scss';

export const template = `
<main class=${classes.main}>
    {{ chats }} 
    {{ content }}
</main>`;
