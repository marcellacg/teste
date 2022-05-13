//estrutura não indexada, diferente de listas
const times = new Set()
//aceita encadeamentos
times.add('Vasco', 'São Paulo').add('Palmeiras').add('Corinthias')
times.add('Flamengo')
times.add('Flamengo') //repetidos são ignorados

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')

//pode-se criar a partir de um array tradicional
const nomes = ['Ana', 'Julia', 'Pedro', 'Ana']
const nomesSet = new Set(nomes) //e retorna sem repetições

