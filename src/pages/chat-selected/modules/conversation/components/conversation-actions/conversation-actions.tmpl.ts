import * as classes from './conversation-actions.module.scss';

export default `
<div class=${classes.actions}>
  <div>{{ attachments }}</div>
  <div class=${classes.form}>{{ messageForm }}</div>
</div>`;
