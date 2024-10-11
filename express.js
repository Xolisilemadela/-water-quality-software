const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const db = require('./db'); // Import your database connection if needed

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static frontend files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Query your database to validate the user (use db connection)
  // Example:
  // db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, result) => {
  //   if (err) throw err;
  //   if (result.length > 0) {
  //     res.json({ message: 'Login successful', user: result[0] });
  //   } else {
  //     res.json({ message: 'Invalid credentials' });
  //   }
  // });

  res.json({ message: 'Login successful' });
});

// Registration route
app.post('/register', (req, res) => {
  const { username, email, password, user_type } = req.body;
  // Insert into your database (use db connection)
  // Example:
  // db.query('INSERT INTO users (username, email, password, user_type) VALUES (?, ?, ?, ?)', [username, email, password, user_type], (err, result) => {
  //   if (err) throw err;
  //   res.json({ message: 'Registration successful' });
  // });

  res.json({ message: 'Registration successful' });
});

module.exports = app;
