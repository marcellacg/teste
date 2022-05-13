//boolean
let isAtivo = true
isAtivo = 1
console.log(!isAtivo) //false
console.log(!!isAtivo) //true
//Situações de verdadeiro:
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //espaço vazio
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log()
//Situações de falso
console.log(!!0)
console.log(!!'') //string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(''|| null || 0 || ' ') //false

//ARRAY - tipo de dados dinâmico
const valores = [7.7, 8.9, 6.6, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //undefined
//caso eu queira acrescentar:
//valores[4] = 10
valores[10] = 20 //[ 7, 7, 8.9, 6.6, 10, <5 empty items>, 20 ]
console.log(valores)

//para adicionar novos elementos em um array: push
console.log(valores.length) //tamanho
valores.push({id: 3}, false, null, 'teste') //{id: 3} é um objeto
console.log(valores)

//pega o último elemento do array e tira: pop
console.log(valores.pop())
//para excluir: delete
delete valores[0] //passa o indice 

//OBJETO [coleção de chaves e valores] - NÃO É A MESMA COISA QUE JSON, json é textual de objeto
const prod1 = {}
prod1.nome = 'Celular' //nome foi criado dinamicamente
prod1.preco = 499.99
console.log(prod1)
//pode-se gerar tbm assim:
prod1['Desconto legal'] = 0.40 //mas evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 42.00,
    obj: {
        etiqueta: 14
    }
}
console.log(prod2)
//JSON:
'{"nome": "Camisa", "preco": 24.99}'

//NULL E UNDEFINED
const a = {nome: 'teste'}
const b = a //atribuição por referência <<---
b.nome = 'Opa'
console.log(b) //retorna 'Opa' pq agora eles apontam pro mesmo endereço
//Valores primitivos fazem cópia por valor, como é o seguinte caso:
let c = 3
let d = c
d++
console.log(d)
let valor //não inicializada, mas tem por valor padrão undefined. Aqui foi somente declarada
console.log(valor)
//console.log(valor2) //não definida, ou seja, nem ao menos foi declarada
let valor3 = null //nula, não aponta para nenhum endereço de memória. Ausência de valor. Usada em casos de zerar variáveis
const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)
