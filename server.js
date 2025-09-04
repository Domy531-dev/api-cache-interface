const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3005;

// Cache simples em memória
const cache = {};

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Exemplo de GET com cache
app.get('/api/data/:key', (req, res) => {
  const { key } = req.params;
  
  if (cache[key]) {
    return res.json({ source: 'cache', data: cache[key] });
  }

  // Simula dados vindos de "outro sistema"
  const data = { value: `Valor para ${key}`, timestamp: new Date() };
  
  // Salva no cache
  cache[key] = data;

  res.json({ source: 'api', data });
});

// Exemplo de POST para atualizar dados (e cache)
app.post('/api/data/:key', (req, res) => {
  const { key } = req.params;
  const { value } = req.body;

  const data = { value, timestamp: new Date() };
  cache[key] = data;

  res.json({ message: 'Dado atualizado com sucesso', data });
});

// Listar cache
app.get('/api/cache', (req, res) => {
  res.json(cache);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
