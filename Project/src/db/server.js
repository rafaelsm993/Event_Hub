// server.js
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error('Erro ao abrir o banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Rota para inserir um usuário
app.post('/api/usuarios', async (req, res) => {
  let { nome, email, senha, tipo, cpf, cnpj, isCNPJ } = req.body;

  console.log('Dados recebidos:', { nome, email, senha, tipo, cpf, cnpj, isCNPJ });

  cpf = cpf ?? null;
  cnpj = cnpj ?? null;
  isCNPJ = isCNPJ ? 1 : 0;

  try {
    const senhaHash = await bcrypt.hash(senha, 10);

    const stmt = db.prepare(`
      INSERT INTO usuarios (nome, email, senha, tipo, cpf, cnpj, isCNPJ)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    stmt.run(nome, email, senhaHash, tipo, cpf, cnpj, isCNPJ, function(err) {
      if (err) {
        console.error('Erro ao inserir usuário:', err.message);
        res.status(500).json({ erro: 'Erro ao inserir usuário' });
      } else {
        console.log('Resultado do insert:', this.lastID);
        res.status(201).json({ id: this.lastID });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao inserir usuário' });
  }
});

// Rota para buscar eventos com base no nome
app.get('/eventos', (req, res) => {
  const nameQuery = req.query.name;

  if (!nameQuery) {
    return res.status(400).json({ error: 'Parâmetro "name" é necessário' });
  }

  const sql = `
    SELECT * FROM eventos
    WHERE titulo LIKE ?
  `;
  const params = [`%${nameQuery}%`];

  db.all(sql, params, (err, rows) => {
    if (err) {
      console.error('Erro ao buscar eventos:', err.message);
      return res.status(500).json({ error: 'Erro ao buscar eventos' });
    }

    res.status(200).json(rows);
  });
});

// Rota para inserir um evento
app.post('/api/eventos', (req, res) => {
  const { titulo, descricao, data, local, id_organizador } = req.body;

  console.log('Dados do evento recebidos:', { titulo, descricao, data, local, id_organizador });

  const stmt = db.prepare(`
    INSERT INTO eventos (titulo, descricao, data, local, id_organizador)
    VALUES (?, ?, ?, ?, ?)
  `);
  stmt.run(titulo, descricao, data, local, id_organizador, function(err) {
    if (err) {
      console.error('Erro ao inserir evento:', err.message);
      res.status(500).json({ erro: 'Erro ao inserir evento' });
    } else {
      console.log('Resultado do insert do evento:', this.lastID);
      res.status(201).json({ id: this.lastID });
    }
  });
});

// Função para verificar o usuário
function verifyUser(email, senha) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM usuarios WHERE email = ?';
    db.get(query, [email], async (err, user) => {
      if (err) {
        console.error('Erro ao consultar o banco de dados:', err.message);
        reject(err);
      } else if (user) {
        const match = await bcrypt.compare(senha, user.senha);
        if (match) {
          resolve(user);
        } else {
          resolve(null);
        }
      } else {
        resolve(null);
      }
    });
  });
}

// Rota de login
app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await verifyUser(email, senha);
    if (user) {
      res.status(200).json(user);
      console.log('LOGOU ESTA porra', user)
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error('Erro ao verificar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
