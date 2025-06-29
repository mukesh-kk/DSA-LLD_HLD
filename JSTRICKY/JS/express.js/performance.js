// Monitoring Performance Metrics
// Keeping track of performance metrics is essential for optimizing your application. Here’s a function to log response times for your API requests.

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.originalUrl} took ${duration}ms`);
    });
    next();
});

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send('Hello, world!');
    }, 1000); // Simulate delay
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
