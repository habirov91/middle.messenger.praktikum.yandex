import Handlebars from 'handlebars';
import {template} from './info-icon.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export const InfoIcon = render({});
