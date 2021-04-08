const express = require('express');
const cors = require('cors');
const { searchByAttr } = require('./controller/superheroController')

const app = express();

const port = 3000;

app.use(cors())
app.use(express.json());

app.post('/search', searchByAttr)

app.listen(port, () => console.log(`API rodando na porta ${port}`));
