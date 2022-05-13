//para tirar atributos de objetos
const pessoa = {
    nome: 'ANA',
    idade: 25,
    endereco: {
        logradouro: 'Rua abc',
        numero: 520
    }
}

const {nome, idade} = pessoa //as chaves aqui estão representando o operador de desestruturaçao
//a leitura é: tire do objeto <pessoa> os atributos nome e idade
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //atribuindo a variaveis
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa //atributos inexistentes retornarão undefined. O setado como 'true' retornará esse valor

const {endereco: {logradouro, numero}} = pessoa //no caso do outro objeto dentro do objeto

//com arrays
const [a] = [10] //array de uma posição e extrair o valor que está nessa posição
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

//com funções
function rand({min = 0, max = 100}) { //atributos dentro de um operador destructuring, que inclusive faz a atribuição dos valores. aqui estamos passando um objeto para essa função
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40} //passamos o obj, onde por isso temos dos pontos
console.log(rand(obj))
console.log(rand({min: 55}))
console.log(rand({}))
//console.log(rand())

//desestruturando de um array
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] //criando um array fazendo as trocas
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))