function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589.00,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //aqui n acessa a função, exceto se os atributos forem globais ^
//ps: o contexto não está definido em console.log(getPreco)
//pss: estando preco e desc em global, a função poderia ler
console.log(produto.getPreco()) //chamando a partir de um objeto

//com call e apply
const carro = { preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro))
console.log(getPreco.apply(carro, [0.17, '$'])) //dentro de um array
//diferença na passagem de parâmetros