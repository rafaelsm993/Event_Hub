//server.js
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./statements'); // Importa o banco (e garante a criação das tabelas)

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Rota para inserir um usuário
app.post('/api/usuarios', (req, res) => {
  let { nome, email, senha, tipo, cpf, cnpj, isCNPJ } = req.body;

  console.log('Dados recebidos:', { nome, email, senha, tipo, cpf, cnpj, isCNPJ });

  cpf = cpf ?? null;
  cnpj = cnpj ?? null;

  // Converte boolean para número (SQLite não tem boolean)
  isCNPJ = isCNPJ ? 1 : 0;

  try {
    const stmt = db.prepare(`
      INSERT INTO usuarios (nome, email, senha, tipo, cpf, cnpj, isCNPJ)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(nome, email, senha, tipo, cpf, cnpj, isCNPJ);

    console.log('Resultado do insert:', result);

    res.status(201).json({ id: result.lastInsertRowid });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao inserir usuário' });
  }
});

// Rota para inserir um evento
app.post('/api/eventos', (req, res) => {
  const { titulo, descricao, data, local, id_organizador } = req.body;

  console.log('Dados do evento recebidos:', { titulo, descricao, data, local, id_organizador });

  try {
    const stmt = db.prepare(`
      INSERT INTO eventos (titulo, descricao, data, local, id_organizador)
      VALUES (?, ?, ?, ?, ?)
    `);
    const result = stmt.run(titulo, descricao, data, local, id_organizador);

    console.log('Resultado do insert do evento:', result);

    res.status(201).json({ id: result.lastInsertRowid });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao inserir evento' });
  }
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});