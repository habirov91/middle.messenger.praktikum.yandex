import * as classes from './profile-layout.module.scss';

export const template = `
<main class=${classes.main}>
    {{ sidebar }}
    <div class=${classes.profile}>
        {{ content }}
    </div>
</main>`;
