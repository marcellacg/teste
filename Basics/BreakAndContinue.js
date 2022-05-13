const nums = [1, 2, 3, 4, 5, 6]
//elas causam desvios de fluxo
for (x in nums){
    if (x == 5){
        break //no caso do break causa um desvio de fluxo para fora do laço mais próximo que ele suporta (que ele age em cima, no caso o for)
    }
    console.log(`${x} = ${nums[x]}`)
}
console.log('********')
for (y  in nums){
    if (y == 5){
        continue //no caso do continue ele simplesmente interrompe a repetição corrente e vai pra próxima repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums){
    for (b in nums) {
        if (a == 2 && b == 3) break externo //se usar só o break, ele vai brecar no for mais interno. Se eu quiser o for externo, tem que usar essa variável (break rotulado). NÃO RECOMENDADO!!
        console.log(`Par = ${a}, ${b}`)
    }
}