import * as classes from './conversation-info.module.scss';

export default `
<div class=${classes.info}>
    <div class=${classes.user}>
        <div class=${classes.avatar}>
            {{ avatar }} 
        </div>
        <div>
            {{ title }}
        </div>
    </div> 
    {{ button }}
    {{ modal }}
</div>`;
