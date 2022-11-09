import * as styles from './conversation.module.scss';

export const template = `
<div  class=${styles.wrapper}>
  <div>{{ topBar }}</div>
  <div class=${styles.messages}>
    {{#each messages}}
      {{ this }}
    {{/each}}
  </div>
  <div>{{ bottomBar }}</div>
</div>`;
