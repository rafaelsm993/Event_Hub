const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const sqlite3 = require("sqlite3").verbose();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const db = new sqlite3.Database(
  "./database.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error("Erro ao abrir o banco de dados:", err.message);
    } else {
      console.log("Conectado ao banco de dados SQLite.");
    }
  }
);

app.use(cors({ origin: "http://localhost:3000" }));

// Criar pasta uploads se não existir
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configuração do multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

app.use(express.json()); // continua para rotas que não sejam multipart

// Rota para inserir um usuário
app.post("/api/cadastro", async (req, res) => {
  let { nome, email, senha, documento } = req.body;

  console.log("Dados recebidos:", {
    nome,
    email,
    senha,
    documento,
  });

  try {
    const senhaHash = await bcrypt.hash(senha, 10);

    const stmt = db.prepare(`
      INSERT INTO usuarios (nome, email, senha, documento)
      VALUES (?, ?, ?, ?)
    `);
    stmt.run(nome, email, senhaHash, documento, function (err) {
      if (err) {
        console.error("Erro ao inserir usuário:", err.message);
        res.status(500).json({ erro: "Erro ao inserir usuário" });
      } else {
        console.log("Resultado do insert:", this.lastID);
        res.status(201).json({ id: this.lastID });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao inserir usuário" });
  }
});

// Rota para buscar eventos com base no nome
app.get("/eventos", (req, res) => {
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
      console.error("Erro ao buscar eventos:", err.message);
      return res.status(500).json({ error: "Erro ao buscar eventos" });
    }

    res.status(200).json(rows);
  });
});

// ✅ Rota para inserir um evento com imagem
app.post("/api/Criar_evento", upload.single("imagem"), (req, res) => {
  const { titulo, descricao, data, local, id_organizador } = req.body;
  const imagem = req.file ? req.file.filename : null; // salva o nome do arquivo

  console.log("Dados do evento recebidos:", {
    titulo,
    descricao,
    data,
    local,
    imagem,
    id_organizador,
  });

  const stmt = db.prepare(`
    INSERT INTO eventos (titulo, descricao, data, local, foto, id_organizador)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  stmt.run(
    titulo,
    descricao,
    data,
    local,
    imagem,
    id_organizador,
    function (err) {
      if (err) {
        console.error("Erro ao inserir evento:", err.message);
        res.status(500).json({ erro: "Erro ao inserir evento" });
      } else {
        console.log("Resultado do insert do evento:", this.lastID);
        res.status(201).json({ id: this.lastID });
      }
    }
  );
});

// Função para verificar o usuário
function verifyUser(email, senha) {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuarios WHERE email = ?";
    db.get(query, [email], async (err, user) => {
      if (err) {
        console.error("Erro ao consultar o banco de dados:", err.message);
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
app.post("/api/login", async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await verifyUser(email, senha);
    if (user) {
      res.status(200).json(user);
      console.log("LOGOU ESTA porra", user);
    } else {
      res.status(401).json({ message: "Credenciais inválidas" });
    }
  } catch (error) {
    console.error("Erro ao verificar usuário:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
