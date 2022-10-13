import Handlebars from 'handlebars';
import './src/components';
import './src/pages';
import template from './index.tmpl.js';

window.addEventListener('DOMContentLoaded', () => {
    const compiled = Handlebars.compile(template);

    app.innerHTML = compiled();
});