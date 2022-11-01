import * as styles from './chats.module.scss';

export const template = `
<div class=${styles.wrapper}>
  <div class=${styles.header}>{{ profile }}</div>
  <div class=${styles.search}>{{ search }}</div>
  <div>
      {{#each chatList}}
      {{ this }}
      {{/each}}
  </div>
</div>`;
