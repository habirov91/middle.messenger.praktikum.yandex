import * as classes from './profile-info.module.scss';

export default `
<div  class=${classes.wrapper}>
  <div class=${classes.avatarWrapper}>
    <div class=${classes.avatarField}>Сменить аватар</div>
    <div class=${classes.avatar}>{{ avatar }}</div>
  </div>
  {{ modal }}
  <div>{{ username }}</div>
  <div class=${classes.infoFields}>
    {{#each profileFields}}
      <div class=${classes.infoField}>
        <div>{{ this.label }}</div>
        <div>{{ this.value }}</div>
      </div>
    {{/each}}
  </div>
  <div>
    <div class=${classes.links}>
      {{#each links}}
        {{this}}
      {{/each}}
    </div>
  </div>
</div>`;
