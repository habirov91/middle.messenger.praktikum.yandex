import Handlebars from 'handlebars';
import template from './infoIcon.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export default render({});
