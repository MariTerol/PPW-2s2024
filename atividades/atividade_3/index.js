const calculadora = require('./calculadora/calculadora')

const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send("Calculadora");
});

app.get('/somar/:n1/:n2', function(req, res){
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    res.send(`Resultado: ${calculadora.somar(n1, n2)}`);
});

app.get('/subtrair/:n1/:n2', function(req, res){
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    res.send(`Resultado: ${calculadora.subtrair(n1, n2)}`);
});

app.get('/multiplicar/:n1/:n2', function(req, res){
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    res.send(`Resultado: ${calculadora.multiplicar(n1, n2)}`);
});

app.get('/dividir/:n1/:n2', function(req, res){
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
    res.send(`Resultado: ${calculadora.dividir(n1, n2)}`);
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('App rodando na porta ' + PORT)
});