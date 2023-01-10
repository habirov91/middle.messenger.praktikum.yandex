import * as classes from './content-block.module.scss';

export const template = `
<div class='${classes.contentBlock} {{#if authForm}}${classes.authForm}{{/if}}'>
  <div class=${classes.title}>{{ title }}</div>
  <div>{{ content }}<div>
</div>`;
