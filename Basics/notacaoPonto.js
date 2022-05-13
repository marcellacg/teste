const obj1 = {}
obj1.nome = 'bola2' //OU
//obj1['nome'] = 'bola2'
console.log(obj1.nome)

function obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new obj('cadeira')
const obj3 = new obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec() //acessando uma função dentro de outra

//DESTRUCTURING - para extrair atributos de dentro de um objto e atribuir a suas respectivas variáveis

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 254
    }
}

const {nome, idade} = pessoa
console.log(nome, idade) //ou criar variavel com a letra n ou i
const { nome: n, idade: i} = pessoa