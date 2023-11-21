const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//body-parser server para receber dados no corpo da requisição (veja a linha 35)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

//cors com '*' serve para permitir requisições de qualquer origem (vc provavelmente já sabe)
app.use(cors({
    origin: '*'
}));

//nesta rota a gente enviaria uma cópia completa do site Vue pronto e compilado, mas como é um exemplo, fiz separado
app.get('/', (req, res) => {
    res.send({msg: 'Rota principal.'});
});

/*
* como vc ja deve ter notado a essa altura, app.get corresponde ao $_GET do PHP, bem como app.post ao $_POST
* ou seja, ainda tem o app.put, app.delete, app.options e app.patch
* (ainda existem outras, mas no desenvolvimento node vc so usara get, post, put e delete)
* IMPORTANTE: os dados que vem na requisição pelo get é diferente dos outros
* no post, put e delete eles vem por meio do body-parser (veja a linha 35)
* esse tipo de dado não é possivel usar no get, porem no get usamos duas outras formas, param e query
* exemplo: app.get('/users/:id') esse :id é um param, ou seja, quando vc fizer a requisição, vc deve colocar o id obrigatoriamente
* exemplo: app.get('/users') aqui não é possivel ver o id, mas é possivel pegá-lo na query (/users?id=1 assim)
* */

const lista = [];
app.post('/new-item', (req, res) => {
    lista.push(req.body.item);
    console.clear();
    console.table(lista);
    res.send({sucesso: true});
});

app.get('/lista', (req, res) => {
    res.send({lista: lista});
});

app.delete('/remove-item', (req, res) => {
    lista.splice(req.body.index, 1);
    console.clear();
    console.table(lista);
    res.send({sucesso: true});
});

app.listen(80, () => {
    console.clear();
    console.info('Servidor rodando na porta 80');
});