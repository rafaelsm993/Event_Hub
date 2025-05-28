-- SQLite
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER
);

INSERT INTO users (name, age)
VALUES 
    ("Tobi", 22),
    ("Niklas", 24)

UPDATE users 
SET name = "Tobis"
WHERE name = "Tobias"

DELETE FROM users
WHERE name = "Hans"

DROP TABLE users;
