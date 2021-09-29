import './scss/headers.scss';
export default function (level, caption) {
  var header = document.createElement('h'+level);
  header.innerText = caption;
  return header;
}