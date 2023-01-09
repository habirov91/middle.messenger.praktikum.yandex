import * as classes from './profile-form.module.scss';

export const template = `
<div>
  <div class=${classes.avatar}>{{ avatar }}</div>
  <div>
    {{ form }}
  </<div>
</div>`;
