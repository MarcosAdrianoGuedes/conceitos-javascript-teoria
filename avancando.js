// Avançando em JavaScript

// Manipulação de arrays
const frutas = ['Maça', 'Laranja']

frutas.unshift('Acerola');

console.log(frutas);

frutas.shift();

console.log(frutas);

// map, filter, reduce -> arrow function
const numeros = [1, 2, 3, 4, 5, 6]

// find -> Retorna o primeiro elemento do critério
const numeroPar = numeros.find((num) => num % 2 === 0);

console.log(numeroPar);

// Filter -> Retorna todos os elementos que batem com o critério
const numerosPares = numeros.filter((num) => num % 2 === 0);

console.log(numerosPares);

// Manipulação de String
const frase = ' Olá, mundo! ';

const palavras = frase.trim().split(' ');

console.log(frase);
console.log(palavras);

const frase2 = 'JavaScript é incrível!'

console.log(frase2.startsWith('Java'));
console.log(frase.endsWith('!'));

// Exceções e tratamentos de erros 
const idade = 15;

// if (idade < 18) {
//     throw new Error("Você deve ter pelo menos 18 anos!")
// }

try {
    if (idade < 18) {
        throw new Error("Você deve ter pelo menos 18 anos!")
    }
} catch (error) {
    console.log(error.mensage);
}

console.log('Continuando o programa...');

// Callback -> Função
function cumprimentar (nome, callback) {
    console.log('Olá, ' + nome);
    callback();
}

function mostrarSaudação() {
    console.log('Como você está?');
}

cumprimentar('Marcos', mostrarSaudação);

cumprimentar('Maria', function() {
    console.log('Ta tudo bem?');
});

// settimeout -> Depois de um tempo executa algo, uma vez 
function mostrarMensagem() {
    console.log('Essa mensagem será exibida depois de 3 segundos')
}

setTimeout(mostrarMensagem, 3000);

setTimeout(function() {
    console.log('Oi')
}, 1000);

// Promises 
const promessa = new Promise((resolve, reject) =>  {
    const condicao = false;
    if (condicao) {
        resolve('A condição é verdadeira!');
    } else {
        reject('A condição é falsa!');
    }
});

promessa 
.then((mensagem) => {
    console.log(mensagem);
})
.catch((erro) =>  {
    console.log(erro);
});

// Bibliotecas feitas que são "promise based"

const promise1 =Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>  {
    setTimeout(resolve, 2500, 'Testando')
});

Promise.all([promise1, promise2]).then((valores) => console.log(valores))

// Async Await
async function obterValor() {
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Valor obtido'), 2000);
    });

    const valor = await promessa;

    console.log(valor);
}

obterValor();

async function obterValorComErro() {
    try {
        const promessa = new Promise((resolve, reject) => {
            setTimeout(() => reject('Valor com erro'), 2000);
        });
    
        const valor = await promessa;
    
        console.log(valor);
    } catch (error) {
        console.log(error)
    }
}

obterValorComErro();

// JSON (JavaScript Object Notation)
// {nome: 'teste'} => {'nome': 'teste'}
// Padroniza a comunicação
// front-end e back-end em ma linguagem só
const objeto = {
    nome: 'João',
    idade: 30
}

const jsonString = JSON.stringify(objeto);

console.log(jsonString);
console.log(typeof jsonString);

const json = '{"nome": "João", "idade": 30}'

const objeto2 = JSON.parse(json);
console.log(objeto)