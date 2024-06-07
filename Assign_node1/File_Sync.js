const fs =require('node:fs');
console.log("File read start");
try{
const data=fs.readFileSync('f:/mern/Nodejs/file_operation/text.txt','utf8') 
    console.log("<-----------file read synchronous---------->")
}

catch(err)
    {
        console.error(err);
        return;
    }
   


console.log("file read end");
console.log("file read end");
console.log("file read end");