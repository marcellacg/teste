function tratarErroELancar(erro) {
    throw new Error('mensagem....') //ou
    //throw 'mensagem'
    
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final') //será executado sempre
    }
}

const obj = { name: 'Maria' }
imprimirNomeGritado(obj)