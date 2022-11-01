import * as styles from './authorization-layout.module.scss';

export const template = `
<main>
    <div class=${styles.wrapper}>
        <div> {{ form }} </div> 
        {{link}}
    </div>
</main>`;
