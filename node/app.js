const http = require('http');
const currentDateTime = require("./myFirstModule");
const uc = require("upper-case");

const fs = require('fs');
const rs = fs.createReadStream("./demofile.txt");
rs.on('open',function(){
    console.log('The file is open');
});

http.createServer((req, res)=>{
    const message = uc.upperCase("hello world ");
    res.end(message + currentDateTime.myDateTime());
}).listen(8080);
console.log('App running on port 8080');