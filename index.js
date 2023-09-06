var http = require('http');


http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>CYCE!<h1>');
    res.end('Adres ip klienta: '+ req.socket.remoteAddress);
}).listen(8080);
