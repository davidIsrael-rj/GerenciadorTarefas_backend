const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.post('/:valor', (req, res, next)=>{
    console.log('Func 0')
    next()
})
app.post('/:valor', (req, res, next)=>{
    console.log('Func 1')
    res.status(200).send('Meu Backend! = '+ req.body.sobrenome)
    next()
})
app.post('/:valor', (req, res)=>{
    console.log('Func 2')
})

app.listen(3000, ()=>{
    console.log('Backend executando!!!...')
})