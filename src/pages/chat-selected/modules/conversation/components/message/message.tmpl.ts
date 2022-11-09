import * as styles from './message.module.scss';

export const template = `
<div class="${styles.message} {{#if own}} ${styles.ownMessage} {{else}} ${styles.incomingMessage} {{/if}}">
  <div>{{ content }}</div>
  {{#if status}}<div>{{ status }}</div>{{/if}}
  <div>{{ time }}</div>
</div>`;
