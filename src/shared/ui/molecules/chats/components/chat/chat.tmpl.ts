import * as styles from './chat.module.scss';

export const template = `
<div class=${styles.wrapper}>
  <div>{{ avatar }}</div>
  <div class=${styles.chat}>
    <div> {{ username }} </div>
    <div> {{#if sender}} <span> {{ sender }} </span> {{/if}} <span> {{ message }} </span></div>
  </div>
  <div>{{ time }}</div>
</div>`;
