import express from 'express';
import morgan from 'morgan';

const app = express();

// Configurar Morgan para registrar logs
app.use(morgan('dev'));

// Rotas
app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API');
});

app.get('/exibir-nome', (req, res) => {
    res.send('Leo Barbosa API');
});

// Base para criar outras rotas 
app.get('/outra-rota', (req, res) => {
    res.send('Conteúdo para outra rota');
});

// O servidor escuta na porta 3000
app.listen(3000, () => {
    console.log('Rodando na porta 3000');
});
