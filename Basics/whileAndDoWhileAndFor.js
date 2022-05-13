function InteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)    
}

//let opcao = 0 //comentei para n dar erro com a variavel de baixo, que é a mesma kkk
while (opcao != -1){
    opcao = InteiroAleatorioEntre(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}`)
}

//DO WHILE
function InteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 //aqui pode começar com o -1 pq a condição está no final:
//ou muito menos há a necessidade de atribuir um valor inicial para a variável
do {
    opcao = InteiroAleatorioEntre(-1, 10)
    console.log(`Opcap escolhida foi ${opcao}`)
} while (opcao != -1);

//FOR ********
let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for (let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}


//FOR IN
//percorre pelos índices e não pelos valores
const notax = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i in notax) {
    console.log(`A nota do ${i} é = ${notax[i]}`)
}
//COM OBJETOS:
const pessoax = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 70
}

for (let atributo in pessoax) {
    console.log(`${atributo} = ${pessoax[atributo]}`)
}