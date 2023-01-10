import * as classes from './error.module.scss';

export default `<div class='${classes.error}{{#if error}} ${classes.errorShow}{{/if}}'>{{ error }}</div>`;
