var a = 3
let b = 4

var a = 30 //var sobrescreve
b = 40 //aqui só sobrescreve pq não tem o identificador 'let' declarado
console.log(a, b)

const c = 3 //por ser constante, seu valor não é alterado
//javascript por ter tipagem fraca significa que uma variaável uma hora pode ser string outra hora pode ser inteiro

let qualquer = 'legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer)

console.log('************* NUMBER ************')

const peso1 = 1.0 //aqui interpreta como inteiro
const peso2 = Number('2.0') //transforma a string em numero? mas é uma função, diferente do number que é o tipo
const peso3 = 1.1 //aqui não interpreta como inteiro


console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))

const ava1 = 9.871
const ava2 = 6.871

const total = ava1 * peso1 + ava2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) //não altera o valor, só mostra a formatação
console.log(media.toString(2)) //passa o valor pra binário

console.log('***** AVISOS *****')

console.log(7 / 0) //curiosamente retorna INFINITY
console.log("10" / 2) //a linguagem vê se no conteúdo pode se converter p/ valor numerico e faz a operação
//caso seja um número de ponto flutuante ele retorna NaN pq não reconhece como um numero
console.log('Show' * 2) //retorna NaN
console.log('3' + 2) //com o sinal de + o processo é diferente por causa da situação de concatenação
//---> console.log(10.toString(2)) //a linguagem não vai direto
//mas vai assim:
console.log((10.355).toFixed(2))

console.log('******* MATH *********')
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(typeof Math)

//USANDO VAR
//fora de um bloco de função, ela estará visível a todos
{
    {
        var sera = 'Será?'
        console.log(sera)
    }
}
console.log(sera)

var numero = 1
{
    var numero = 2
    console.log('Dentro =', numero)
}
console.log('Fora =', numero) //ambos saem 2

function serasi(){
    var local = 123
    console.log(local)
} //fora não acessa

//USANDO LET - tem escopo de bloco. Mesmo não estnado dentro de uma função
var numero = 1
{
    let numero = 2
    console.log('Dentro =', numero)
}
console.log('Fora =', numero) //resultado: 1 e 2