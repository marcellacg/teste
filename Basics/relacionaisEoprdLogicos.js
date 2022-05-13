console.log('1' == 1) //compara valores, não tipo
console.log('1' === 1)

const d1 = new Date(0)
const d2 = new Date(0) 
console.log(d1 === d2)//compara endereços de memória
console.log(d1 == d2)//por isso ambos são false
console.log(d1.getTime() === d2.getTime()) //aqui é vdd pq esta comparando valores

/*
v e v -> v
v e f -> f
f e ? -> f

v ou ? -> v
f ou v -> v
f ou f -> f

v xor -> f
v xor -> v
f xor -> v
f xor f -> f

!v -> f  ______ negação lógica
!f -> v
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor. os !! convertem para boolean. o ^ é OuExclusivo bit a bit
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete 

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //jogando tudo dentro de um objeto, já que o return só faz retorno de um só valor
    //nesse return não precisaria retornar a chave junto com valor, a linguagem dá a liberdade de retornar o valor apenas com a chave
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))

//OPERADOR TERNÁRIO
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
    //nota é maior ou igual a sete ? Se for, aprovado. Senão[:], reprovado