const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' directory

// In-memory storage for users (for demonstration only)
let users = [];

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Water Quality Monitoring App!');
});

// Signup route
app.get('/signup', (req, res) => {
  res.send(`
    <h1>Signup</h1>
    <form action="/signup" method="POST">
      <input type="text" name="username" placeholder="Username" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Signup</button>
    </form>
  `);
});

// Signup form submission
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  // Store user (for demonstration purposes only, do not use this in production)
  users.push({ username, password });
  res.send(`User ${username} signed up successfully!`);
});

// Login route
app.get('/login', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form action="/login" method="POST">
      <input type="text" name="username" placeholder="Username" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  `);
});

// Login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.send(`Welcome back, ${username}!`);
  } else {
    res.send('Invalid username or password. Please try again.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
