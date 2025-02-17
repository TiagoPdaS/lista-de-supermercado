const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');
const PORT = 3000;

app.use(express.json());
app.use('/api', routes);

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../')));

// Rota para servir o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
