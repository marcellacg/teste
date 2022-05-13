/*function factorial(n) {
    if (n == 0){
        return 1
    } else {
        return n * factorial(n-1)
    }
}
console.log(factorial(4))
*/

/*function repetir(a, b) {
    return Array(b).fill(a)
}
console.log(repetir(7, 3))
*/


function cumprimentar(nome) {
    return `Olá, ${nome}!`
}
console.log(cumprimentar('Leonardo'))
console.log(cumprimentar('Maria'))

function converterIdadeEmAnosParaDias(anos) {
    return anos * 365
    
}
console.log(converterIdadeEmAnosParaDias(70))

function calcularSalario(horasTrabalhadas, valor) {
    horasTrabalhadas *= valor
    return `Salário igual a R$${horasTrabalhadas}`
}
console.log(calcularSalario(150, 40.5))

function nomeDoMes(nome) {
    switch (nome) {
        case 1:
            console.log('janeiro')
            break
        case 2:
            console.log('fevereiro')
            break
        case 3:
            console.log('março')
            break
        case 4:
            console.log('abril')
            break
        case 5:
            console.log('maio')
            break
        case 6:
            console.log('junho')
            break
        case 7:
            console.log('julho')
            break
        case 8:
            console.log('agosto')
            break
        case 9:
            console.log('setembro')
            break
        case 10:
            console.log('outubro')
            break
        case 11:
            console.log('novembro')
            break
        case 12:
            console.log('dezembro')
            break
        default:
            console.log('Não é um mês válido.')
    }
    
}
nomeDoMes(1)

/*function nome(a, b) {
    let arrai = []
    if (!isNaN(b)) {
        for (let i = 0; i < b; i++) {
            Array.push(a)
        }
        return arrai
    } else {
        return false
    }   
}
console.log(nome(7, 3))
*/


function maiorOuIgual(a, b) {
    if (!isNaN(a) && !isNaN(b)){
        if (a > b) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
console.log(maiorOuIgual(2, 3))

function inverso(a) {
    if (a == true) {
        return false
    } else if (a == false) {
        return true
    } else if (Number.isInteger(a)) {
        return -a
    } else if (a) {
        return `Booleano ou número separados, mas o parâmetro é do tipo String.`
    }
}
console.log(inverso(8))

function multiplicar(a, b) {
    if (a >= 0 && b >= 0){
        return Math.imul(a, b)
    }    
}

console.log(multiplicar(0, 7))
//ARROW FUNCTION:
const multiplicar = (a, b) => a >= 0 && b >= 0 ? Math.imul(a, b) : false
console.log(multiplicar(3, 3))

function nome(a, b) {
    let arrai = []
    for (let i = 0; i < b; i++) {
        arrai.push(a)
    }
    return arrai
} 
console.log(nome("Código", 3))

function receberPrimeiroUltimoElemento(a) {
    let list = [a[0], a[a.length-1]]
    return list
}

let a = [1, 2, 5, 8, 9, "Olá"]
console.log(receberPrimeiroUltimoElemento(a))

function removerPropriedade(obj1, propriedade) {
    let copia = {...obj1}
    delete copia[propriedade]
    return copia                                //*********** não fiz
    
}
let obj1 = {a: 1, b: 2}
let propriedade = "a"


console.log(removerPropriedade(obj1, propriedade))

function paresIndicesPares(arrai) {
    for (let elemento in arrai){
        arrai.map(function (elemento) { 
            if (elemento % 2 == 0){ 
                return elemento
            }
        })
        arrai.push(elemento)
        return arrai
    }
}

let arrai = [1, 2, 3, 4]
console.log(paresIndicesPares(arrai))