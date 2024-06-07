const crypto = require('crypto');
const {performance} =require('perf_hooks');

const start=performance.now();

//Synchronous pbkdf2 computation
for(i=0;i<1;i++){
crypto.pbkdf2("password","salt",100000,64,"sha512",()=>{
const end=performance.now(); // End measuring time
const hashtime= end-start; //calculate the time difference
console.log('time taken: ${hashTime.toFixed(3)} miliseconds');
});
}