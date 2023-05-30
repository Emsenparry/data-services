import http from 'http';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hej verden');
    res.end()
}).listen(4000, () => {
    console.log('Node server kører på http://localhost:4000');
})