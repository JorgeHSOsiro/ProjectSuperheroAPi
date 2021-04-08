const express = require('express');
const cors = require('cors');
const { searchByAttr } = require('./controller/superheroController');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/search', searchByAttr);

app.listen(port, () => console.log(`API rodando na porta ${port}`));
