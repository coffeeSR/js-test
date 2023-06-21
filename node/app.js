const http = require('http');
const currentDateTime = require("./myFirstModule");

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello  World! '+ currentDateTime.myDateTime());
}).listen(8080);
console.log('App running on port 8080');