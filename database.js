const mysql = require('mysql2');

const db = mysql.createConnection({
  host: ' http://localhost:3000',
  user: 'John Doe', 
  password: 'password123', 
  database: 'student' 
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = db;
