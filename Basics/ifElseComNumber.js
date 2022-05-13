//CRIA UM NOVO MÉTODO NUMÉRICO
Number.prototype.myMethod = function() {
    //this ou qualquer nome de variavel
    return this / 2
}

let n = 50
let x = n.myMethod()
console.log(x)

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperacao')
    } else if (nota.entre(0, 3.99)) {
        console.log('reprovado')
    } else {
        console.log('Nota invalida')
    }
}

imprimirResultado(10)
imprimirResultado(6.55)