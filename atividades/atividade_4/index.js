const gerenciamento = require('./gerenciamento/gerenciamento')

const express = require('express');

const app = express();

let estoque = [];

app.get('/', function(req, res){
    res.send("Gerenciamento de Estoque");
});

app.get('/adicionar/:id/:nome/:qtd', function(req, res){
    const id = parseFloat(req.params.id);
    let nome = req.params.nome; 
    const qtd = parseFloat(req.params.qtd);
    res.send(`Adicionado! : ${gerenciamento.adicionar(id,nome,qtd)}`);
});

app.get('/listar', function(req, res){
    res.json(gerenciamento.listar());
});

app.get('/remover/:id', function(req, res){
    const id = parseFloat(req.params.id);
    estoque = estoque.filter(produto => produto.id !== id)
    res.send(`Produto com ID:${id} removido do estoque!`);
});

app.get('/editar/:id/:qtd', function(req, res){
    const id = parseFloat(req.params.id);
    const qtd = parseFloat(req.params.qtd);
    res.send(gerenciamento.editar(id, qtd));
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('App rodando na porta ' + PORT)
});