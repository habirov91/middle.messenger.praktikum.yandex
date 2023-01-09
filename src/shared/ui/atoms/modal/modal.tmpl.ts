import * as classes from './modal.module.scss';

export const template = `
<div class='${classes.modalShadow}{{#if isModalOpen}} ${classes.modalShadowOpen}{{/if}}'>
    <div class='${classes.modal}{{#if isModalOpen}} ${classes.modalOpen}{{/if}}' >
        {{ content }}
    </div>
<div>`;
