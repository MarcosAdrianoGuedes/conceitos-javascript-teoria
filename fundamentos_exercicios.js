// Exercícios de fundamentos
// Exercício 1: Olá, Mundo!!
// Crie um script que imprima 'Olá mundo!' no console

const cumprimento = 'Olá, mundo!';

console.log(cumprimento);

// Exercécio 2: Conversão de tipo
// Dado o valor de uma string "1234", converta-o em um número e exiba o tipo da variável no console.

const valorString = '1234';

const valorNumber = (Number(valorString));

console.log(typeof (valorNumber));

// Exercício 3: Manipulação de string
// Dada uma string "JavaScript é incrível", escreva um códido que conte quantos caracteris a string tem e quantas palabras existem na frase.

const texto = 'JavaScript é incrível';
const texto2 = ['JavaScript', 'é', 'incrível'];

console.log(texto.length);
console.log(texto2.length);

/**
 * Resltado do professor
 */

const minhaString = 'JavaScript é incrível';
const numeroDeCaracteres = minhaString.length;
const numeroDePalavras = minhaString.split(' ').length;

console.log(`O número de caracteres é: ${numeroDeCaracteres}`);
console.log(`O número de palavras é: ${numeroDePalavras}`);

// Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. Use o loop for para imprimir cada nome no console

const nomes = ['Marcos', 'Samara', 'Gabriel', 'Pedro', 'Thiago'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// Exercício 5: Funções, Strings e Math 
// Crie uma função que aceita uma String representando no horário de 24 horas
// A função deve retornar uma string que onverta o horário para o formato de 12 horas
// Use o objeto Math para auxiliar nessa conversão.
// Certifique-se de ue sua função lida corretamente com o horário

function conververHorario(horario24) {
    const [hora, minuto] = horario24.split(':');
    const hora12 = hora % 12 || 12;

    let periodo = 'AM';

    if (hora > 12) {
        periodo = 'PM';
    }

    console.log(`${hora12}:${minuto} ${periodo}`);

}

conververHorario('15:16');
conververHorario('09:46');
conververHorario('21:12');