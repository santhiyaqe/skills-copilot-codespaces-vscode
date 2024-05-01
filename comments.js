// Create web server
// Start server
// Create a route for comments
// Get comments from database
// Return comments as JSON
// Create a route for adding comments
// Add comments to database
// Return comments as JSON
// Create a route for deleting comments
// Delete comments from database
// Return comments as JSON
// Create a route for updating comments
// Update comments in database
// Return comments as JSON
// Stop server
// Test comments

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    const comments = JSON.parse(fs.readFileSync('comments.json'));
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comments = JSON.parse(fs.readFileSync('comments.json'));
    comments.push(req.body);
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.json(comments);
});

app.delete('/comments', (req, res) => {
    const comments = JSON.parse(fs.readFileSync('comments.json'));
    const index = comments.findIndex(comment => comment.id === req.body.id);
    comments.splice(index, 1);
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.json(comments);
});

app.put('/comments', (req, res) => {
    const comments = JSON.parse(fs.readFileSync('comments.json'));
    const index = comments.findIndex(comment => comment.id === req.body.id);
    comments[index] = req.body;
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.json(comments);
});

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;

// comments.js
// Create a route for comments
// Get comments from database
// Return comments as JSON
// Create a route for adding comments
// Add comments to database
// Return comments as JSON
// Create a route for deleting comments
// Delete comments from database
// Return comments as JSON
// Create a route for updating comments
// Update comments in database
// Return comments as JSON
// Test comments

const request = require('supertest');
const fs = require('fs');
const server = require('./comments');

beforeEach(() => {
    fs.writeFileSync('comments.json', '[]');
});

afterAll(() =>



