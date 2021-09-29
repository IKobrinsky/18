import './scss/para.scss';
export default function (text) {
  var paragraph = document.createElement('p');
  paragraph.innerHTML = text;
  return paragraph;
}