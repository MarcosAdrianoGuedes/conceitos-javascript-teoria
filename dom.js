// DOM - Document Object Model 

// Selecionar elementos 

const elemnetoPorId = document.getElementById('meuId');

console.log(elemnetoPorId);

const elementPorId2 = document.querySelector('#meuId');

console.log(elementPorId2);

const elementoPorClasse = document.getElementsByClassName('minhaClasse');

console.log(elementoPorClasse);

const elementoPorClasse2 = document.querySelector('.minhaClasse');

console.log(elementoPorClasse2);

// Manipular conteúdo de texto 
const element = document.querySelector('#meuId');

console.log(element.textContent);

setTimeout(() => {
    element.textContent = 'Mudei o texto...'
}, 3000);


// Trabalhando com atibutos
const link = document.querySelector('a');
console.log(link);

link.setAttribute('href', 'https://www.youtube.com/');

console.log(link.getAttribute('href'));

console.log(link.hasAttribute('target'));

link.removeAttribute('target');

// Manipulação de classes do CSS

const elemento = document.querySelector('#meuId')

element.classList.add('novaClasse');

element.classList.remove('minhaClasse');

element.classList.toggle('outraClasse');
element.classList.toggle('outraClasse');

// Manipular Css
const elemento3 = document.querySelector('#meuId');

elemento3.style.color = 'blue';
elemento3.style.backgroundColor = 'red';
// Utilizar o camelCase para auterar o CSS no JS 

// Navegação entre nós 

const elemento4 = document.querySelector('#meuInput');

const pai = elemento4.parentNode;

console.log(pai);

// Obter o primeiro filho 

const primeiroFilho = pai.firstChild;
console.log(primeiroFilho);

const ultimoFilho = pai.lastChild;
console.log(ultimoFilho);

// Manipulação de estrutura do DOM 
const novoElemento = document.createElement('div');

console.log(novoElemento);

novoElemento.textContent = 'Minha div de JavaScript';

console.log(novoElemento);

document.body.appendChild(novoElemento);

document.body.insertBefore(novoElemento, pai);

document.body.removeChild(elemnetoPorId);

// Eventos 
// Click

const botao = document.querySelector('button');

botao.addEventListener('click', function () {
    console.log('Botão clicado!');
});

// Mouse
const elemento5 = document.querySelector('#meuFormulario');

elemento5.addEventListener('mouseover', function () {
    console.log('O mouse passou por cima!')
});

// Teclado 
const campoInput = document.querySelector('#meuInput');

campoInput.addEventListener('keydown', function () {
    console.log('A pessoa respondeu ao fomulário')
});

// Formulário
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log('Formulário enviado')
});

// Propagação de enventos 
document.querySelector('#elementoPai').addEventListener('click', function () {
    console.log('O elemento pai foi clicado')
});

document.querySelector('#elementoFilho').addEventListener('click', function (event) {
    // event.stopPropagation();
    console.log('O elemento filho foi clicado')
});

document.querySelector('#meuLink').addEventListener('click', function(event) {
    event.preventDefault();

    console.log('Clicou no link');
});

// Delegação de eventos 
document.querySelector('#elementoPai').addEventListener('click', function() {
    if(event.target.matches('.classeDosFilhos')) {
        console.log('Evento delegado para o filho')
    }
});