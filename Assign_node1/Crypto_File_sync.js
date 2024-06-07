const crypto = require('crypto');
const {performance} =require('perf_hooks');

const start=performance.now();

const os =require('os');
process.env.UV_THREADPOOL_SIZE=8;

//Synchronous pbkdf2 computation
crypto.pbkdf2Sync("password","salt",100000,64,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,64,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,64,"sha512");

const end=performance.now(); // End measuring time

const hashtime= end-start; //calculate the time difference

console.log('time taken: ${hashTime.toFixed(3)} miliseconds');