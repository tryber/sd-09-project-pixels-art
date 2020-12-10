function createHeader() {
  let header = document.createElement('header');
  let title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Paleta de Cores';
  document.body.appendChild(header);
  header.appendChild(title);
}

window.onload = function() {
  createHeader();
}
