const { Worker } = require('worker_threads');
const path =require('path')
console.log('__dirname', __dirname)
const workerPath = path.resolve(__dirname, 'worker.js');
function runWorkerTask(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, { workerData });

    // Listen for messages from the worker
    worker.on('message', resolve);
    // Handle worker errors
    worker.on('error', reject);

    // Handle worker exit (unexpected exit)
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

async function main() {
  console.log('Main thread: Sending task to worker...');

  try {
    const result = await runWorkerTask({ start: 1, end: 1e6 });
    console.log('Main thread: Received result from worker:', result);
  } catch (err) {
    console.error('Main thread: Error:', err);
  }
}

main();
