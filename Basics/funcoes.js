/*lembrete: o interpretador sempre carrega primeiros as funções, por isso podemos chamá-las antes
isso no formato normal dela (function declaration), caso ela seja armazenada em uma const/let, o
interpretador só lerá dps
*/
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 8)
imprimirSoma()

//função sem retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())


//Armazenando uma função em uma variavel
const imprimirSoma = function (a, b){
    return a + b
} //função anonima


//Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

//retorno implícito
const subtracao = (a, b) => a - b

const imprimir2 = a => console.log(a)
imprimir2('Legal!')

//FUNÇÃO VS OBJETO
console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} 
console.log(typeof Produto)
console.log(typeof new Produto)


//SESSÃO ESPECÍFICA

//criar de forma literal
function fun1(a, b) {return a-b}

//armzenar em uma variavel
const fun2 = function(a, b) {
    return a + b
}

//armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2] //nesses casos é bom armezenar em variáveis para inserir no array
console.log(array[2](2, 3)) //armazenou o resultado na posição 0 do array

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar()) //falar() é a função

//Passar função como parâmetro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)        
    }
}

soma(2, 3)(4) //o resultado. Isso é uma chamada DIRETA

//pode-se fazer tbm por armazenamento em variavel:
const cincoMais = soma(2, 3)
cincoMais(4)

//PARAMETROS VARIÁVEIS [ARGUMENTS]
function soma() {
    let soma = 0
    for (i in arguments) { //arguments é um array interno. Toda função tem esse array. Quando nenhum parametro é passado, esse array está vazio e tem-se a possibilidade de passar qualquer quantidade de parametros nele
        soma += arguments[i]
    }
    return soma 
}

console.log(soma(1))
console.log(soma(2, 3))
console.log(soma(5, 2, 7))

//PARAMETRO PADRÃO
function soma(a = 1, b = 1, c =1) {
    return a + b + c
}
console.log(soma(), soma(3), soma(2, 3), soma(0, 0, 0))

//FUNÇÕES - THIS e BIND 
const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

/*pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradimas: funcional e OO
*/
const falarDePessoa = pessoa.falar.bind(pessoa) //aqui amarra
falarDePessoa()

function Pessoa() {
    this.idade = 0

    setInterval(function () {   /*temporizador*/
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //amarra o this do objeto à chamada da função
}

new Pessoa //pra disparar

// outra situação (e melhor) sem bind
function Pessoa() {
    this.idade = 0

    const self = this //self recebe a referencia de this. gambiarra pra amarrar o this na função do temporizador
    setInterval(function () {   /*temporizador*/
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa //pra disparar

//ARROW FUNCTIONS
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implícito. se houver apenas um parametro não precisa de parenteses
console.log(dobro(Math.PI))

/*let ola = funcion () {
    return 'Ola'
}
ola = () => 'Ola'
console.log(ola())
*/

function Pessoa() {
    this.idade = 0

    setInterval(() => { //com arrow function não existe mais necessidade do bind ou gambiarras
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa

//FUNÇÕES ANONIMAS
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)//7
imprimirResultado(3, 4, soma)//7
imprimirResultado(3, 4, function(x, y){ //-1
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y) //12
const pessoa2 = {
    falar: function(){
        console.log('Opa')
    }
}
pessoa2.falar()

//FUNÇÕES CALLBACK
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
    
}
fabricantes.forEach(imprimir) //imprime formatado
fabricantes.forEach(function(fabricante){ //o parametro será cada um dos elementos do array
    console.log(fabricante) //sendo nomeada de 'a' ou 'fabricante' mesmo
}) //essa chamada com função imprime apenas os elementos de fabricante
//.........
const notas = [2.0, 4.0, 7.1]
const notasBaixas = notas.filter(function(nota){
    return nota < 7
}) //utilizando a função filter, joga-se uma função dentro passando o array, que filtrando cada um, retornará os valores < que 7
//essa função no caso, será invocada para cada um dos elementos
console.log(notasBaixas)

//FUNÇÃO CONSTRUTORA
function Carro(velocidadeMax = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //método público
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMax
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function (){
        //não seria publico se fosse definido com const/let
        return velocidadeAtual
    }
}

const uno = new Carro() //vai vazia pq os parametros já estão setados na função
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const Ferrari = new Carro(350, 20)
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual())

//FUNÇÃO FACTORY: para evitar repetições de funções semelhantes, criando objetos
//factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }    
}
console.log(criarPessoa())

function criarPessoa2(name, lastname) {
    return {
        nome: name,
        sobrenome: lastname
    }
}
console.log(criarPessoa2('Joao', 'Costa'))


/*FUNÇÃO IIFE - Immediately Invoked Function Expression
para fugir do escopo global
manter entre parênteses e chamá-la com outro par
*/
(function (){
    console.log('Exec...')
})()
