// Logging Requests with Middleware
// Middleware is a powerful feature in Express that lets you process requests before they reach your route handlers. Here’s how to create middleware to log request details.

const express = require('express');
const app = express();
const port = 3000;

function requestLogger(req, res, next) {
    const { method, url } = req;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} ${url}`);
    next();
}

app.use(requestLogger);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});