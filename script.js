const body = document.querySelector('body');
const createHeder = document.createElement('header');
body.appendChild(createHeder);
const header = document.querySelector('header');
header.id = 'Header';
header.appendChild(document.createElement('h1'));
const h1 = document.querySelector('h1');
h1.id = 'title';
h1.innerText = 'Paleta de Cores';
