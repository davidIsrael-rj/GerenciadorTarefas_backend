const express = require('express')
const app = express()

app.get('/:valor', (req, res, next)=>{
    console.log('Func 0')
    next()
})
app.get('/:valor', (req, res, next)=>{
    console.log('Func 1')
    res.status(200).send('Meu Backend! = '+ req.params.valor)
    next()
})
app.get('/:valor', (req, res)=>{
    console.log('Func 2')
})

app.listen(3000, ()=>{
    console.log('Backend executando!!!...')
})