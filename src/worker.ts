import { workerData } from "node:worker_threads";
import Database from "better-sqlite3";

const dbPath = workerData as string;

console.log(dbPath);

const db = new Database(dbPath);

db.prepare(`CREATE TABLE test_${Date.now()} (id INTEGER PRIMARY KEY, test TEXT)`).run();

console.log("Loaded");
