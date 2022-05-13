for (let letra of 'Magikarp') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i) //aqui vai por indice. O for of vai por valores 
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assunstosMap = new Map ([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assunstosMap) {
    console.log(assunto)
}

for (let chave of assunstosMap.keys()) {
    console.log(chave)
}

for (let valor of assunstosMap.values()) {
    confirm.log(valor)
}

for (let [ch, vl] of assunstosMap.entries()) { //utilizando destructuring
    console.log(ch, vl)
}