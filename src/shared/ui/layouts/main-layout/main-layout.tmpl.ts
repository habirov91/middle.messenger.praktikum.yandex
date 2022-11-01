import * as styles from './main-layout.module.scss';

export const template = `
<main class=${styles.wrapper}>
    {{ chats }} 
    {{ content }}
</main>`;
