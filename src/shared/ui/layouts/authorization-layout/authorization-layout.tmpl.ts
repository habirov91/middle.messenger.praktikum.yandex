import * as classes from './authorization-layout.module.scss';

export const template = `
<main>
    <div class=${classes.authorization}>
        <div> {{ form }} </div> 
        {{link}}
    </div>
</main>`;
