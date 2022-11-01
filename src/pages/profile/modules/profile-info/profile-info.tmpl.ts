import * as styles from './profile-info.module.scss';

export const template = `
<div class=${styles.wrapper}>
<div class=${styles.head}>
  <div>{{ avatar }}</div>
  <div>{{ username }}</div>
</div>
  <div class=${styles.infoFields}>
    {{#each profileFields}}
      <div class=${styles.infoField}>
        <div>{{ this.label }}</div>
        <div>{{ this.value }}</div>
      </div>
    {{/each}}
  </div>
  <div>
    <div class=${styles.links}>
      {{#each links}}
        {{this}}
      {{/each}}
    </div>
  </div>
</div>`;
