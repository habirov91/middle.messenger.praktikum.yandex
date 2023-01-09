import * as classes from './chats.module.scss';

export const template = `
<div class=${classes.chats}>
  <div class=${classes.header}>
    <div>{{ profile }}</div>
    <div>{{ search }}</div>
    <div>{{ chatAdd }}</div>
    <div>{{ modal }}</div>
  </div>
  <div>
    <ul>
      {{#each chatList}}
      {{ this }}
      {{/each}}
    </ul>
  </div>
</div>`;
