
const sqlite3 = require('sqlite3').verbose();

//const PORT = 3000;

// Conectar (ou criar) banco SQLite
const db = new sqlite3.Database('./src/db/meubanco.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err.message);
  } else {
    console.log('Conectado ao banco SQLite!');
  }
});

db.run(`CREATE TABLE IF NOT EXISTS usuarios (
  id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  senha TEXT NOT NULL,
  tipo TEXT NOT NULL
)`);

db.run(`CREATE TABLE IF NOT EXISTS eventos (
  id_evento INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL,
  descricao TEXT,
  data DATE,
  local TEXT NOT NULL,
  foto TEXT,
  id_organizador INTEGER NOT NULL,
  FOREIGN KEY (id_organizador) REFERENCES usuarios(id_usuario)
)`);

db.run(`CREATE TABLE IF NOT EXISTS inscricao (
  id_inscricao INTEGER PRIMARY KEY AUTOINCREMENT,
  id_usuario INTEGER NOT NULL,
  id_evento INTEGER NOT NULL,
  data_inscricao DATE,
  status TEXT NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_evento) REFERENCES eventos(id_evento)
)`);

db.run(`CREATE TABLE IF NOT EXISTS foto (
  id_foto INTEGER PRIMARY KEY AUTOINCREMENT,
  url TEXT NOT NULL,
  descricao_foto TEXT,
  id_evento INTEGER NOT NULL,
  FOREIGN KEY (id_evento) REFERENCES eventos(id_evento)
)`);

