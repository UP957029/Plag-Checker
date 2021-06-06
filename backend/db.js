const uuid = require('uuid-random');
const sqlite3 = require('sqlite3').verbose();
const today = new Date();
// Creates the database

function create() {
  const db = new sqlite3.Database('database.db');
  db.run('CREATE TABLE IF NOT EXISTS BestMatches (id CHAR(36) PRIMARY KEY, best TEXT NOT NULL, time DATETIME);');
  return db;
}

// declares a variable to create the database.
const dbConn = create();

// Returns the best matches in order by time
async function getMatches() {
  const db = await dbConn;
  return db.all('SELECT * FROM BestMatches ORDER BY time DESC LIMIT 10');
}

// Returns the matches with a given id
async function findMatch(id) {
  const db = await dbConn;
  return db.all('SELECT * FROM BestMatch WHERE if = ?', id);
}

async function addMatch(text) {
  const db = await dbConn;

  const id = uuid();
  const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  const match = text;
  await db.run('INSERT INTO BestMatches VALUES (?, ?, ?)', [id, match, time]);
}

module.exports = {

  getMatches, findMatch, addMatch,

};
