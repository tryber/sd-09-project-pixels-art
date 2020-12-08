let body = document.querySelector('body');
let createHeder = document.createElement('header');
body.appendChild(createHeder);
let header = document.querySelector('header');
header.id = 'Header';
header.appendChild(document.createElement('h1'));
let h1 = document.querySelector('h1');
h1.id = 'title';
h1.innerText = 'Paleta de Cores';
