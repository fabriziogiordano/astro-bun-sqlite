import { Database } from "bun:sqlite";

const db = new Database("db.sqlite", { readonly: true });

export async function runQuery() {
    return await db.query("SELECT * FROM contacts").all();
}