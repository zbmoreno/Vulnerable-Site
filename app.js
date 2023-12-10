const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// In-memory user storage (replace this with a database in a real-world application)
const users = [
    { username: 'user', password: 'pass' }
];

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find user in the in-memory storage
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.send('Login successful!');
    } else {
        res.send('Invalid username or password.');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});