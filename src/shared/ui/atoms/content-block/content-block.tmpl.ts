import * as styles from './content-block.module.scss';

export const template = `
<div class='${styles.wrapper} {{#if authForm}}${styles.authForm}{{/if}}'>
  <div class=${styles.title}>{{ title }}</div>
  <div>{{ content }}<div>
</div>`;