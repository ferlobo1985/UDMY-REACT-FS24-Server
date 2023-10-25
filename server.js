const http = require('http');

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello dude, I am a response')
})

server.listen(8181,'127.0.0.1');
console.log('Server is running on port 8181');