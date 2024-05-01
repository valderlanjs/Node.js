const express = require('express');
const checklistRouter = require('./src/routes/checklist')
require('./config/database');

const app = express();
app.use(express.json());

app.use('/checklists', checklistRouter);
/*
// middleware para verificar se quando fez a chamada web existe algum json disponivel
app.use(express.json());

const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next();
}

app.use(log);

// criação de uma rota
app.get('/', (req, res) => {
    res.send('<h1>Minha lista de tarefas!</h1>')
});

app.get('/json', (req, res) => {
    
    res.json({ title: "Tarefa X", done: true})
})*/

app.listen(3000, () => {
    console.log('Servidor foi iniciado!');
});



