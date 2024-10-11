const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' directory

// In-memory storage for users (for demonstration purposes only)
let users = [];

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Water Quality Monitoring App!');
});

// Signup route
app.get('/register', (req, res) => {
  res.send(`
    <h1>Signup</h1>
    <form action="/register" method="POST">
      <input type="text" name="username" placeholder="Username" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Signup</button>
    </form>
  `);
});

// Register form submission
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.send('User already exists! Please choose a different username.');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store user
  users.push({ username, password: hashedPassword });
  res.send(`User ${username} registered successfully!`);
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
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.send('Invalid username or password. Please try again.');
  }

  // Compare hashed password
  const match = await bcrypt.compare(password, user.password);
  if (match) {
    res.send(`Welcome back, ${username}! You are logged in.`);
  } else {
    res.send('Invalid username or password. Please try again.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
