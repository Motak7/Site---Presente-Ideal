const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('../Infra/Database/database');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        await sequelize.query(
            'INSERT INTO usuarios (name, email, password) VALUES (?, ?, ?)',
            { replacements: [name, email, password], type: sequelize.QueryTypes.INSERT }
        );

        res.send('Cadastro bem-sucedido!');
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).send('Erro ao cadastrar usuário.');
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await sequelize.query(
            'SELECT * FROM usuarios WHERE username = ? AND password = ?',
            { replacements: [username, password], type: sequelize.QueryTypes.SELECT }
        );

        if (user.length > 0) {
            res.send('Login bem-sucedido!');
        } else {
            res.send('Nome de usuário ou senha incorretos.');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).send('Erro ao fazer login.');
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});