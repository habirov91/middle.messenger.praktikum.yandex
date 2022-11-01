import * as styles from './form-error.module.scss';

export const template = `<div class='${styles.wrapper}{{#if error}} ${styles.error}{{/if}}'>{{ error }}</div>`;
