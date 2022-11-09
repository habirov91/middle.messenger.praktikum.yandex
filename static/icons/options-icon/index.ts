import Handlebars from 'handlebars';
import {template} from './options-icon.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export const OptionsIcon = render({});
