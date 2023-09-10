import { Database } from "bun:sqlite";

const db = new Database("db.sqlite", { create: true })
db.query(`
    CREATE TABLE IF NOT EXISTS contacts (
        name TEXT NOT NULL
    );`
).run();

// db.query(`INSERT INTO contacts (name) VALUES('Fabrizio');`).run();
// db.query(`INSERT INTO contacts (name) VALUES('Fabrizio2');`).run();

const data = await db.query("SELECT * FROM contacts").all();
console.log(JSON.stringify(data, null, 2));

db.close()