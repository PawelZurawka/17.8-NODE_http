const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', function(err, data){
            if (err) throw err;
            response.write(data);
            response.end();
        });   
    } 
    else {
        response.statusCode = 404;
        response.write('<img src="https://i.postimg.cc/sgwsCBWk/404.png" alt="404">');
        response.end();
    }
});

server.listen(9000);
console.log('Server running');