const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/auth');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json()); // For parsing JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // For parsing URL-encoded data
app.use(express.static('public')); // Serve static files from the 'public' directory
app.use('/api', authRoutes); // Use the authentication API routes

// Serve HTML views
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './views/login.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
