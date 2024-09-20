const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req,res)=>{
    res.render('app html');
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('App rodando na porta ' + PORT)
});