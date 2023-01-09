import Handlebars from 'handlebars';
import template from './burgerIcon.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default render({});
