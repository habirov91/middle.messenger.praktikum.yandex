import * as styles from './error-layout.module.scss';

export const template = `
<main class=${styles.wrapper}>
    <div class=${styles.error}>
        <div>{{ code }}</div>
        <div>{{ text }}</div>
    </div>
    <div>{{ link }}</div>
</main>`;
