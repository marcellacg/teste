const escola = 'escolar'
console.log(escola.charAt(6)) //retrona r
console.log(escola.charAt(7)) //n retorna nada
console.log(escola.charCodeAt(3)) //valor na tabela ascii
console.log(escola.indexOf('s')) //indice do digito
console.log(escola.substring(1)) //a partir deste indice ele retorna o restante
console.log(escola.substring(0, 3)) //do indice 0 ao 3-1
console.log('Escola'.concat(escola).concat("!")) //concatena
console.log(escola.replace('e', 'i')) //substitui
console.log('Ana, Maria, Pedro'.split(','))//converter string em array com separador ,
console.log()
console.log('********* TEMPLATE **********')
const nome = 'Rebeca'
const concatenacao = 'Ola' + nome + '!'
const template = `
    Olá
    ${nome}`
console.log(concatenacao, template)

//EXPRESSÕES..
console.log(`1 +1 = ${1 +1}`)
const up = texto => texto.toUpperCase() //texto é o parametro
console.log(`Ei.... ${up('Cuidado')}!`) //chamou a função up

let noms = 'Maria'
console.log(nome || 'Desconhecido') //caso nome não informado, ele printa desconhecido

