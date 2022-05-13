class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) { //ao fim se concatena tds os parametros
        lancamentos.forEach(l => this.addLancamentos.push(l)) //pegará cada elemento dará um push no array que pertence ao obj. Ou seja, push cada um dos lançametos que recebi como paramentro 
    }

    sumario() {
        let valorConsolidado = 0
        this.addLancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())