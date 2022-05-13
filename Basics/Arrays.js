//formas de chamar array:
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
//ou:
aprovados = ['Bia', 'Carlos', 'Ana', 'Thiago', 'Jose']
//forma de adc um novo elemento em um array:
aprovados[3] = 'Paulo' //aqui mais pra susbstituir um elemento a partir do indice
aprovados.push('Abia') //mais apropriado pra adc elemento
console.log(aprovados.length)
aprovados[9] = 'Rafael'
console.log(aprovados.length)
aprovados.sort() //ordernar, altera diretamente o array

delete aprovados[9] //delete mas não reordena
console.log(aprovados)
aprovados.splice(1, 3) //serve pra add elementos em um determinado indice, como serve para remover elementos de um array como tbm para adc e remover elementos ao mesmo tempo
console.log(aprovados) //selecionou o primeiro e excluiu da posição informada; excluindo assim ana, bia e carlos
//[ 'Abia', 'Bia', 'Carlos', 'Jose', 'Paulo', 'Rafael', <3 empty items> ]
//aprovados.splice(1, 3, 'Elemento1', 'Elemento2') //exclui os dois elementos dps vai adc os outros dois

//MÉTODOS PRINCIPAIS
const pilotos = ['Mario', 'João', 'Cris']
pilotos.pop() //remove ultimo elemento do array
console.log(pilotos)
pilotos.push('Ze')//adc elemento no array na última posiçao
console.log(pilotos)
pilotos.shift() //remove primeiro elemento do array
console.log(pilotos)
pilotos.unshift('Pedro') //adc elemento no array na primeira posiçao
console.log(pilotos)
pilotos.splice(2, 0, 'Bottas','Massa')//adc no indice dois, sem remover elemento e vou adc 'bottas' e 'massa'
console.log(pilotos) //então antes da posição 2 ele acrescenta os dois nomes
//removendo temos:
pilotos.splice(3, 1) //sai o da terceira posição
console.log(pilotos)

//slice - retorna um novo array
const algunsPilotos1 = pilotos.slice(2) //a partir do indice 2 ele pega os outros elementos
const algunsPilotos2 = pilotos.slice(1, 4) //pega até o 4 elemento MENOS UM

//FOR EACH
const aprovades = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovades.forEach(function(nome, indice){ //essa function é callback; passa-se o parametro array tbm
    console.log(`${indice + 1}) ${nome}`)
})
//com arrow function
aprovades.forEach(nome => console.log(nome))
const exibirAprovades = aprovado => console.log(aprovado)
aprovades.forEach(exibirAprovades)

Array.prototype.meuForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) //valor atual, indice, array completo
    }
    
}
let ab = [5, 9, 8]
ab.meuForEach(function(numero) {
    console.log(numero)
})
console.log('mensagem')

//FUNÇÃO MAP - faz uma transformaçao no array (gerando novo array). A ideia é mapear um array pra outro array de mesmo tamanho só que com os dados transformados
const nums = [1, 2, 3]
let results = nums.map(function(elemento) {
    return elemento * 2
})
console.log(results)
//cadeias de map (utilização diversa)
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultads = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(results)

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//retornar um array apenas com os preços
const paraObjeto = function (json) {
    return JSON.parse(json)
} //ou:
/*
const paraObjeto = json => JSON.parse(json)
*/
const apenasPreco = produto => produto.preco //função para pegar preco
const resultados = carrinho.map(paraObjeto).map(apenasPreco) //passando as funções pro map pra ele pegar seu respectivo 'cada um' e fazer o serviço
console.log(resultados)
//implementação:
Array.prototype.meuMap = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this)) //valor atual, indice, array completo
    }
    return newArray
}
let abc = [5, 9, 8]
ab.meuMap(function(numero) {
    console.log(numero)
})

//método FILTER - serve para filtrar um array para obter um subarray (de mesmo tamanho ou menor)
const produtinhos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]
//console.log(produtinhos.filter(function(p) { //ele funciona com verdadeiro ou falso
    //return false //cada elemento passando sendo falso, o array retorna vazio
//      return p.preco > 2500
//}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true
console.log(produtinhos.filter(caro).filter(fragil))

//função REDUCE
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.1, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const resultadinho = alunos.map(a => a.nota).reduce(function(acumulador, atual){ //AQUI A FUNÇÃO FOI FORA
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultadinho) //pega o primeiro, soma com o segundo, e o resultado é somado com o da frente
//Todos os alunos são bolsistas?
const bolsistinhas = (resultado, bolsista) => resultado && bolsista //primeiro uma função com a condição //AQUI A FUNÇÃO FOI FORA
console.log(alunos.map(a.bolsista).reduce(bolsistinhas)) //map pra varrer, reduce pra aplicar a função de cima
//Algum aluno é bolsista?
const alguemBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(alguemBolsista))

//Abordagens imperativas e declarativas
//imperativa - COMO FAZER
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[1].nota
}
console.log(total1 / alunos.length)

//declarativa - O QUE FAZER
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma) //reduce -> AGrega tudo a partir da soma
console.log(total2/alunos.length)

//Concat
const filhas = ['Maria', 'Zefa', 'Julia']
const filhos = ['Mario', 'Zé', 'Pedro']
const totdos = filhas.concat(filhos)
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])) //array vazio que concatena esses elementos. Em matriz ele só desce 1 nível e joga no array como um outro array