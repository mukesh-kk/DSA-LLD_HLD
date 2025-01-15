const { parentPort, workerData } = require('worker_threads');

// Simulate a task using workerData
const { start, end } = workerData;
let sum = 0;
for (let i = start; i <= end; i++) {
  sum += i;
}

// Send the result back to the main thread
parentPort.postMessage(sum);
