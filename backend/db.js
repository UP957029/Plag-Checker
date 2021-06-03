const uuid = require('uuid-random');
const sqlite3 = require('sqlite3').verbose();
const today = new Date();
// Creates the database
async function init() {
  const db = await sqlite3.OPEN_CREATE('./database.sql', { verbose: true });
  await db.migrate({ migrationPath: './migrations-sql' });
  return db;
}

// declares a variable to create the database.
const dbConn = init();

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

async function addMatch(url) {
  const db = await dbConn;

  const id = uuid();
  const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  const match = addMatch;
  await db.run('INSERT INTO BestMatches VALUES (?, ?, ?)', [id, match, time]);
}
