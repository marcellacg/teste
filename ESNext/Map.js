//esse Map é diferente. Como se fizesse objetos
const tecnologias = new Map()
tecnologias.set('react', {framework: false}) //seta os valores
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react').framework) //retorna false
console.log(tecnologias.get('react')) //retorna {framework: false}

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objetos'],
    [123, 'Numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) //o has é como se fosse uma pergunta. Aqui retorna true
chavesVariadas.delete(123) //retorna false caso printe
console.log(chavesVariadas.size) //tamanho