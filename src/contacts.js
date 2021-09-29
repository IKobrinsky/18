const homeImage = require('./images/home.jpg');
import './scss/app.scss';
import createMenu from './menu';
import h from './h';
var menu = createMenu();

document.body.insertAdjacentElement('afterbegin',h(1,'Как меня найти'));
document.body.insertAdjacentElement('afterbegin', menu);