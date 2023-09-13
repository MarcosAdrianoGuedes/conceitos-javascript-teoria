// ESC6 + = Versão mais nova do JavaScript 
// ES40 -> Nem todos os navegadores sejam compatíveis
// let e const 
let n = 10;
n = 20;


const x = 20;

function testeLet() {
    let x = 1;
    if(true) {
        let x = 2;
        console.log(x);
    }
    console.log(x)
}

function testeVar() {
    var x = 1;
    if(true) {
        var x = 2;
        console.log(x);
    }
    console.log(x)
}

testeVar();
testeLet();

// Arrow Function
const soma = (a, b) => a + b;

console.log(soma(3, 5));

const quadrado = (numero) => numero * numero;

console.log(quadrado(4));

const cumprimento = (nome) => {
    const mensagem = `Olá, ${nome}`;
    return mensagem;
};

console.log(cumprimento('Marcos Adriano'));

// Template Literals
const nome = 'Maria';
const idade = 32;

console.log(`Meu nome é ${nome} e eu tenho ${20 + 2} anos`);

// Destructuring -> Desestruturação
const pessoa = { nome: 'João', idade: 40, profissao: 'Progamador' }

const {nome: nome2, idade: idade2, profissao } = pessoa;

console.log(nome2, profissao);

const numeros = [1, 2, 3, 4, 5];

const [primeiro, segundo, terceiro] = numeros;

console.log(primeiro, segundo, terceiro);

// Spread operator -> espalhamento
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2);

const soma2 = (...args) => args.reduce((total, numero) => total + numero, 0);

console.log(soma2(1, 2, 3, 4, 5, 6, 7));

// Default parameters 
function saudacao(nome = 'Visitante') {
    console.log(`Olá, ${nome}`);
}

saudacao();
saudacao('Matheus');

// Object Literals 
// {nome: 'Matheus'}
const nomeNovo = 'Felipe';
const idadeNova = 24;

const pessoaNova = {nomeNovo, idadeNova};

console.log(pessoaNova);

const saudacaoObject = {
    dizerOi() {
        console.log('Oi');
    }
}

saudacaoObject.dizerOi();

// Classes e heranças
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    falar() {
        console.log(`Olá pessoal, meu nome é: ${this.nome}`);
    }

}

const joao = new Pessoa('João', 34);
console.log(joao);

joao.falar();

class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
        super(nome, idade);
        this.salario = salario;
    }

    falarFuncionario() {
        super.falar()
        console.log(`Eu ganho R$${this.salario}`);
    }
}

const mario = new Funcionario('Mario', 44, 3200);

console.log(mario);

mario.falarFuncionario();