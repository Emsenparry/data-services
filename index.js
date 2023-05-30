import http from 'http';

http.createServer((req, res) => {
    console.log('Server kører på http://localhost:4000');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hej verden');
    res.end()
}).listen(4000)