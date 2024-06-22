// Create web server
// Create a new web server
const express = require('express');
const app = express();

// Create a new web server
app.get('/comments', (req, res) => {
  res.send('Comments');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});