                                                        //transformando ela em factory:
class Pessoa {                                          
    constructor(nome){                                  //function Pessoa(nome){
        this.nome = nome                                    //this.nome = nome
    }                                                       //this.falar = function(){
    falar(){                                                   //console.log(`Meu nome é ${this.nome}`)
        console.log(`Meu nome é ${this.nome}`)              //}
    }                                                    //}
}
const p1 = new Pessoa('Joao')
p1.falar()

//com função arrow - aqui não varia de valores no console do chrome, sempre apontando para a variavel certa
//não tem a questão do this para acessar a variavel, pois a arrow tem ciencia do contexto lexico no qual ele foi declarado
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Jairo')
p2.falar()