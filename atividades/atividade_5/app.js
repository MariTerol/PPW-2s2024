const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;
    if (!nome || !endereco || !telefone || !data) {
        return res.redirect('/');
    }
    res.sendFile(path.join(__dirname, 'views', 'dados.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
