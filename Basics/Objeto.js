//coleção dinâmica de pares chave/valor
const produto = new Object //função construtora e a partir disso ele instancia um objeto
//e podemos usar duas notações
produto.nome = 'Cadeira'
produto['marca_produto'] = 'Generica'
produto.preco = 220
console.log(produto)
delete produto.preco
delete produto['marca_produto']
console.log(produto)

const carro = {
    modelo: 'A4', valor: 890000, proprietario: { nome: 'Raul', idade: 56, 
    endereco: { logradouro: 'Rua Abc', numero: 123 }}, 
    condutores: [{ nome: 'Junior', idade: 19}, 
    { nome: 'Ana', idade: 42}],
    calcularValorSeguro: function(){
        //....
    }
}
carro.proprietario.endereco.numero = 1000
/* ou */ carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.proprietario.endereco

//CRIAÇÃO DE OBJETOS
// usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof Object)
const obj2 = new Object
console.log(obj2)

//funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //ta publico
    this.getPrecoComDesconto = () => { //os atributos n estao publics
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
console.log(p1.getPrecoComDesconto())

//função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Joao', 7980, 4)
console.log(f1.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON!"}')
console.log(fromJSON.info) //converte os dados para objeto

//Object.freeze pra congelar
const PessoaConstante = Object.freeze({nome: 'Joao'})

//Notação literal
const nomeAttr = 'Nota' //chave
const valorAttr = 7.87 //valor
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)//ou:
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//MÉTODOS GETTERS AND SETTERS - Getters: método get para ler uma variável e o método set para alterar o valor de uma variável
//conversão com underline
const sequencia = {
    _valor: 1, //variável é pretendida ser acessada apenas internamente dentro do obj sequencia
    get valor() { return this._valor++},
    set valor(valor){
        if (valor > this._valor) { //se os numeros passados forem maiores que 1, ele faz a soma (da função de cima) e o set devolve esse número retornado
            this._valor = valor
        }
    }
}

sequencia.valor = 9000  //aqui é a função
//sequencia._valor = 1000 //aqui é a variável
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 10000
console.log(sequencia.valor, sequencia.valor)
//sequencia.valor = 900 //dá erro por ser um valor menor informado
//console.log(sequencia.valor, sequencia.valor)

//FUNÇÕES IMPORTANTES

const pessoa = {
    nome: 'jose',
    idade: 24,
    peso: 78

}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) //retorna uma lista de listas para cada par
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`) //para cada par de lista, ele retorna suas chaves e valores
})

Object.defineProperty(pessoa, 'dataNascimento', { //é um modo de definir as propriedades de forma mais completa, setando seus parâmetros
    enumerable: false,
    writable: false,
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//object.assign
const dest = { a: 1}
const o1 = { b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //ele faz uma concatenação, e faz uma sobrescrição de elementos de atributos iguais. dest não é alterado; um novo obj é criado para isso

//CADEIA DE PROTÓTIPOS (PROTOTYPE CHAIN) - HERANÇA
Object.prototype.attr0 = '0'
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: '3'}
const filho = { __proto__: pai, attr3: 'C'} //filho herda atributos do pai que herda do avo. O avo herda de Object.prototype
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) //attr3 retorna 'C' pq é o primeiro a ser reconhecido na hierarquia de baixo pra cima

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shawdowing, sobrescrevendo variáveis de escopo abrangente como é o caso do objeto carro 
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //super para referenciar o protótipo. Sombreando a função status() do obj volvo
    }
}

Object.setPrototypeOf(ferrari, carro)//estabelecendo relação entre ferrari e carro. Ferrari TEM COMO PROTÓTIPO carro
Object.getPrototypeOf(volvo, carro)
//e assim podemos acessar os atributos tanto de ferrari quanto os atributos que recebendo a partir do protótipo; chamar funções e tal
volvo.acelerarMais(100)
console.log(volvo.status()) //retorna tanto o modelo qnt o status dele (que tem o status() do pai inserido em seu retorno)
ferrari.acelerarMais(300)
console.log(ferrari.status()) //vai chamar o método direto de carro sem nenhuma alteração, já que não houve sobrescrita de método embaixo.
/*a velocidade máxima sobrescreve a que está no obj carro. inclusive o this.velMax vai ler a velocidade máxima que está em ferrari, pq this
este momento não é carro, e sim ferrari.
*/

const pai2 = { nome: 'Pedro', corCabelo: 'preto'}
const filho1 = Object.create(pai2) //define que o protótipo é o objeto que passamos como parâmetro, ele ja consegue localizar o atributo a partir do protótipo que definimos
filho1.nome = 'Ana'
console.log(filho1.corCabelo)

const filha2 = Object.create(pai2, {
    nome: { value: 'Bia', writeble: false, enumerable: true}
}) //aqui são todos os atributos que quero adc no obj filha2 

for (let key in filha2){
    console.log(key)
}
//ou
for (let key in filha2){
    filha2.hasOwnProperty(key) ? //pra ver se pertence ao próprio obj
        console.log(key) : console.log(`Por herança: ${key}`)
}

//novas funcionalidades para String/Array/Object
String.prototype.reverse = function () { //conseguimos acessar as funções dentro de String
    return this.split('').reverse().join('')
} //reverse foi adicionado no prototype de String

console.log('Minha Arara pôs um ovo'.reverse()) //a frase é um objeto gerado dentro de String, então ele acessa o método reverse()

Array.prototype.first = function () { //ou criarmos funções, como essa first()
    return this[0]
}
console.log([1, 2, 3])

//Object.preventExtensions - Não se adiciona mais atributos, mas pode deletar
const produto1 = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensível?: ', Object.isExtensible(produto)) //false
produto.nome = 'Borracha'
produto.descricao = 'Borracha branca' //não vai
delete produto.tag
console.log(produto)
//Object.seal
//não se adc novos atributos, não se exclui, mas pode modificar valores
const pessoa3 = {nome: 'Ju', idade: 30}
Object.seal(pessoa3)

//Object.freeze = selado + valores constantes. Nao se inclui valores, n se exclui chaves e nem modifica

//JSON:
const obj5 = {a: 1, b: 3, c: 2, soma() {a + b + c}}
console.log(JSON.stringify(obj5)) //passam somente dados, não funções
//de JSON para objeto:
console.log(JSON.parse('{"a": 1, "b": "Lugar", "c": true, "d": {}, "e": [] }'))
