import Handlebars from 'handlebars';
import {template} from './burger-icon.tmpl';

const render = Handlebars.compile(template, { noEscape: true });

export const BurgerIcon = render({});
