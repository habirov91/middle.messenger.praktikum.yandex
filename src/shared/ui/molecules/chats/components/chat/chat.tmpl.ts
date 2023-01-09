import * as classes from './chat.module.scss';

export default `
<li class=${classes.chat}>
  <div class=${classes.avatar}>{{ avatar }}</div>
  <div class=${classes.chatInfo}>
    <div> {{ title }} </div>
    <div class=${classes.messageInfo}>
      {{#if sender}} <span class=${classes.sender}>{{ sender }}:</span> {{/if}}
      <span class=${classes.message}>{{ message }}</span>
    </div>
  </div>
  <div>
    <div> {{ time }} </div>
    {{#if unread}} <div> {{ unread }} </div> {{/if}}
  </div>
</li>`;
