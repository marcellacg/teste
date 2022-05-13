function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, /*reject*/) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
    
}

falarDepoisDe(3, 'Que legal')
.then(frase => frase.concat('!!'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e))

//OUTROS EXEMPLOS:
let p = new Promise(function(resolve){ //no Promise só recebe função
   // resolve(3)
      resolve(['Ana', 'Bia', 'Carlos'])
})//os retornos sempre são de um único valor; para mais valores, passar um objeto é o indicado ou até listas

/*
p.then(function(valor){ //para acessar
    console.log(valor) //no then só recebe função
}) //aqui retornará 3, que foi o valor da promessa passada
//Quando a promessa for cumprida aí ele chamará essa função passando exatamente o valor que passamos lá em cima
*/
//E SE PODE TER MÉTODOS THEN SUCESSIVOS. Seus resultados vão passando um pro outro:
p.then(valor => valor[0]) //aqui retorna 'Ana'. O resultado Ana vai pro próximo then
//.then(primeiro => console.log(primeiro)) // = Ana
.then(primeiro => primeiro[0]) //retorna A (normal) para o then seguinte
.then(letra => letra.toLowerCase()) //retorna A (maiusculo) para o then seguinte
.then(letraMinuscula => console.log(letraMinuscula)) //retorna minuscula
//OU PODE COLOCAR UMA FUNÇÃO DIRETO NOS THEN:
function primeiroElemento(array) {
    return array[0]
}
p.then(primeiroElemento)

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()
p.then(primeiroElemento).then(primeiraLetra).then(letraMinuscula).then(console.log) //já que ele sempre retorna 1 unico valor, o console é passado sozinho
//E OU IR DIRETO:
new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos'])
}).then(primeiroElemento).then(primeiraLetra).then(letraMinuscula).then(console.log)

//SEGUNDO EXEMPLO DE PROMISE
function esperarPor(tempo = 2000) {
    return new Promise(function (resolve){
        setTimeout(function(){
            console.log('Executando...')
            resolve()
        }, tempo)
    })
}
esperarPor()
.then(() => esperarPor())
.then(esperarPor)

//OUTRO EXEMPLO:
function gerarNumersoEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumersoEntre(1, 60)
.then(num => num * 10)
.then(numX10 => `O numero gerado foi ${numX10}`)
.then(console.log)