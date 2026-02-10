const cluster = require("cluster"); 
const os = require("os"); 
const http = require("http"); 
if (cluster.isMaster) 
    { const cpus = os.cpus().length; 
        for (let i = 0; i < cpus; i++) cluster.fork(); } 
        else { 
            http.createServer((req, res) => { res.end("Hello from worker " + process.pid); }).listen(3000); } 
// This lets Node.js use all cores.



//Process-Level vs Machine-Level Scaling

// Clustering (Single Machine):

// Multiple processes on one server machine

// Master distributes load to workers

// Best for using all CPU cores on one host

// Distributed Load Balancing((nginx)) (Many Machines):

// Each machine runs its own set of Node.js processes

// External load balancer sits in front and distributes traffic across machines

// Useful when traffic outgrows a single machine          