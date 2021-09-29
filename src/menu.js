import './scss/menu.scss';
export default function() {return createMenu([{caption:'Главная', ref:'./index.html'},{caption:'Обо мне', ref:'./about.html'},{caption:'Контакты', ref:'./contacts.html'}],'menu');}

function createMenu(array, className) {
  var menu = document.createElement('header');
  menu.className = className;
  var listItems = '';
  array.forEach(function(item) {
    listItems += '<a href="' + item.ref + '">' + item.caption + '</a>';
  });
  menu.innerHTML = listItems;
  return menu;
}