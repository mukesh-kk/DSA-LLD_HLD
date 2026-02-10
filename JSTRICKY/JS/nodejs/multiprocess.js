const cluster = require("cluster"); 
const os = require("os"); 
const http = require("http"); 
if (cluster.isMaster) 
    { const cpus = os.cpus().length; 
        for (let i = 0; i < cpus; i++) cluster.fork(); } 
        else { 
            http.createServer((req, res) => { res.end("Hello from worker " + process.pid); }).listen(3000); } 
            // This lets Node.js use all cores.