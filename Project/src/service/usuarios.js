const sqlite3 = require('sqlite3').verbose();

class UsuarioService {
    constructor() {
        this.db = new sqlite3.Database('./src/db/meubanco.db', (err) => {
            if (err) {
                console.error('Erro ao conectar ao banco:', err.message);
            } else {
                console.log('Conectado ao banco SQLite!');
            }
        });
    }

    create(usuario, callback) {
        const { nome, email, senha, tipo, cpf, cnpj, isCNPJ } = usuario;
        const sql = `INSERT INTO usuarios (nome, email, senha, tipo, cpf, cnpj, isCNPJ) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        this.db.run(sql, [nome, email, senha, tipo, cpf, cnpj, isCNPJ ? 1 : 0], function (err) {
            if (err) {
                return callback(err);
            }
            callback(null, { id: this.lastID });
        });
    }

    listAll(callback) {
        const sql = `SELECT * FROM usuarios`;
        this.db.all(sql, [], (err, rows) => {
            if (err) {
                return callback(err);
            }
            callback(null, rows);
        });
    }

    listWhereEmail(email, callback) {
        const sql = `SELECT * FROM usuarios WHERE email = ?`;
        this.db.get(sql, [email], (err, row) => {
            if (err) {
                return callback(err);
            }
            callback(null, row);
        });
    }

    delete(id_usuario, callback) {
        const sql = `DELETE FROM usuarios WHERE id_usuario = ?`;
        this.db.run(sql, [id_usuario], function (err) {
            if (err) {
                return callback(err);
            }
            callback(null, { changes: this.changes });
        });
    }
}

module.exports = UsuarioService;