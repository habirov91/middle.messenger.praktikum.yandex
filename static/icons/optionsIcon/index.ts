import Handlebars from 'handlebars';
import template from './optionsIcon.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default render({});
