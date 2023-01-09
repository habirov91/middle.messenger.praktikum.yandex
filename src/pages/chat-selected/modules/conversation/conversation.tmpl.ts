import * as classes from './conversation.module.scss';

export default `
<div>
  <div>{{ topBar }}</div>
  <div class=${classes.messages}>
    {{#each messages}}
      {{ this }}
    {{/each}}
  </div>
  <div>{{ bottomBar }}</div>
</div>`;
