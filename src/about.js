const myImage = require('./images/me.jpg');

import './scss/app.scss';
import createMenu from './menu';
import h from './h';
var menu = createMenu();

document.body.insertAdjacentElement('afterbegin',h(1,'Обо мне'));
document.body.insertAdjacentElement('afterbegin', menu);