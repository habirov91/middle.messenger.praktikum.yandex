import * as classes from './error-laout.module.scss';

export const template = `
<main class=${classes.main}>
    <div class=${classes.error}>
        <div>{{ code }}</div>
        <div>{{ text }}</div>
    </div>
    <div>{{ link }}</div>
</main>`;
