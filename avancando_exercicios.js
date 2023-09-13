const listaDeCompras = [];
listaDeCompras.push('Leite', 'Ovos', 'Pão', 'Manteiga', 'Queijo');

listaDeCompras.shift()

console.log(listaDeCompras);


const numeros = [3, 7, 14, 21, 29, 36, 42];

const numero = numeros.find((num) => num > 10 && num % 7 === 0);

console.log(numero);

const numeros2 = [5, 10, 15, 20, 25, 30, 35, 40]

const filtrados = numeros.filter((num) => num > 20);

console.log(filtrados)

const frase = ' Bom dia, mundo! '

const fraseNova = frase.trim().split(' ')

console.log(fraseNova)

const texto = 'O rato roeu a roupa do rei de Roma'

const texto2 = texto.startsWith('O');
const texto3 = texto.endsWith('Roma');

console.log(texto2, texto3);