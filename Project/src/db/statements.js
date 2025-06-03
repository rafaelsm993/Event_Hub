const path = require('path');
const Database = require('better-sqlite3');

const dbPath = path.resolve(__dirname, 'database.db');
const db = new Database(dbPath);
const createTables = () => {
    const tables = [
        `CREATE TABLE IF NOT EXISTS usuarios (
          id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE,
          senha TEXT NOT NULL,
          tipo TEXT NOT NULL,
          cpf TEXT,
          cnpj TEXT,
          isCNPJ BOOLEAN NOT NULL DEFAULT 0
        )`,
    
        `CREATE TABLE IF NOT EXISTS eventos (
          id_evento INTEGER PRIMARY KEY AUTOINCREMENT,
          titulo TEXT NOT NULL,
          descricao TEXT,
          data DATE,
          local TEXT NOT NULL,
          foto BLOB,
          id_organizador INTEGER NOT NULL,
          FOREIGN KEY (id_organizador) REFERENCES usuarios(id_usuario)
        )`,
    
        `CREATE TABLE IF NOT EXISTS inscricao (
          id_inscricao INTEGER PRIMARY KEY AUTOINCREMENT,
          id_usuario INTEGER NOT NULL,
          id_evento INTEGER NOT NULL,
          data_inscricao DATE,
          status TEXT NOT NULL,
          FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
          FOREIGN KEY (id_evento) REFERENCES eventos(id_evento)
        )`,
    
        `CREATE TABLE IF NOT EXISTS foto (
          id_foto INTEGER PRIMARY KEY AUTOINCREMENT,
          imagem BLOB NOT NULL,
          id_evento INTEGER NOT NULL,
          FOREIGN KEY (id_evento) REFERENCES eventos(id_evento)
        )`,
        
      ];
    
      for (const sql of tables) {
        db.prepare(sql).run();
      }
    };
    
    createTables();

module.exports = db;