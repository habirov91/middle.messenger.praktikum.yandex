import * as styles from './form.module.scss';

export const template = `
<form class='${styles.form}{{#if vertical}} ${styles.vertical}{{/if}}' novalidate>
<div class=${styles.inputWrapper}>
  {{#each fields}}
    <div  class='${styles.inputContainer}'>
      {{ this.input }}
      {{#if this.error}} {{ this.error }} {{/if}}
    </div>
  {{/each}}
  </div>
  <div>{{ button }}</div>
  <div>{{#if this.link}} {{ this.link }} {{/if}}</div>
</form>`;
