import * as styles from './conversation-info.module.scss';

export const template = `
<div class=${styles.info}>
    <div class=${styles.user}>
        {{ avatar }} 
        {{ username }}
    </div> 
    {{ button }}
</div>`;
