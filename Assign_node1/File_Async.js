const fs =require('node:fs');
console.log("File read start");
fs.readFile('f:/mern/Nodejs/file_operation/text.txt','utf8',(err,data) => 
{
   if(err)
    {
        console.error(err);
        return;
    }
    console.log("<------file read asynchronous--------->")

});

console.log("file read end");