const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body) //o que chegou no body da requisição
    resp.send('Parabéns! Usuário incluido.')
}) //para atender uma requisição do tipo post

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body) //o que chegou no body da requisição
    resp.send('Parabéns! Usuário alterado.')
})

app.listen(8080)