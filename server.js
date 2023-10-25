const http = require('http');
const fs = require('fs');

let HTML = fs.readFileSync(`${__dirname}/index.html`)

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(HTML);
})

server.listen(8181,'127.0.0.1');
console.log('Server is running on port 8181');