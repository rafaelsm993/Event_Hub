-- Usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    tipo TEXT NOT NULL
);

INSERT INTO usuarios (nome, email, senha, tipo)
VALUES 
    ("Tobi", "tobi@gmail.com", "teste123", "Organizador"),
    ("Niklas", "Niklas@gmail.com", "password123", "Participante")

UPDATE usuarios 
SET nome = "Tobias"
WHERE nome = "Tobi"

DELETE FROM usuarios
WHERE nome = "Niklas"

DROP TABLE usuarios;

-- EVENTOS

CREATE TABLE IF NOT EXISTS eventos (
    id_evento INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descricao TEXT,
    data DATE,
    local TEXT NOT NULL,
    foto TEXT,
    id_organizador INTEGER NOT NULL,
    FOREIGN KEY (id_organizador) REFERENCES usuarios(id_usuario)
);

INSERT INTO eventos (titulo, descricao, data, local, foto, id_organizador)
VALUES 
    ("Evento de Tecnologia", "Conferência sobre IA", "2025-06-15", "São Paulo", "evento1.jpg", 1),
    ("Feira de Games", "Lançamento de novos jogos", "2025-07-10", "Rio de Janeiro", "evento2.jpg", 1);

UPDATE eventos
SET local = "Belo Horizonte"
WHERE titulo = "Feira de Games";

DELETE FROM eventos
WHERE titulo = "Evento de Tecnologia";

DROP TABLE eventos;

-- Inscricao

CREATE TABLE IF NOT EXISTS inscricao (
    id_inscricao INTEGER PRIMARY KEY AUTOINCREMENT,
    id_usuario INTEGER NOT NULL,
    id_evento INTEGER NOT NULL,
    data_inscricao DATE,
    status TEXT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento)
);

INSERT INTO inscricao (id_usuario, id_evento, data_inscricao, status)
VALUES 
    (2, 2, "2025-05-28", "Confirmado"),
    (2, 1, "2025-05-20", "Pendente");

UPDATE inscricao
SET status = "Cancelado"
WHERE status = "Pendente";

DELETE FROM inscricao
WHERE status = "Cancelado";

DROP TABLE inscricao;

-- Foto

CREATE TABLE IF NOT EXISTS foto (
    id_foto INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    descricao_foto TEXT,
    id_evento INTEGER NOT NULL,
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento)
);

INSERT INTO foto (url, descricao_foto, id_evento)
VALUES 
    ("https://site.com/img1.jpg", "Palestrante no palco", 1),
    ("https://site.com/img2.jpg", "Área de stands", 2);

UPDATE foto
SET descricao_foto = "Auditório cheio"
WHERE descricao_foto = "Palestrante no palco";

DELETE FROM foto
WHERE descricao_foto = "Área de stands";

DROP TABLE foto;