import * as styles from './profile-layout.module.scss';

export const template = `
<main class=${styles.wrapper}>
    {{ sidebar }}
    <div class=${styles.profile}>
        {{ content }}
    </div>
</main>`;
