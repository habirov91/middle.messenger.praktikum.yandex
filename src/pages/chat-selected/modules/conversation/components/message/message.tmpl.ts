import * as classes from './message.module.scss';

export default `
<div class="${classes.message} {{#if own}} ${classes.ownMessage} {{else}} ${classes.incomingMessage} {{/if}}">
  <div class=${classes.content}>{{ content }}</div>
  <div class=${classes.info}>
    {{#if status}}<div>{{ status }}</div>{{/if}}
    <div>{{ time }}</div>
  </div>
</div>`;
