const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    // res.write('welcome to our homepage');
    if (req.url === '/') {
        res.end('welcome to lasan our homepage')
    }
    if (req.url === '/about') {
        res.end('here is some shorts');
    }
    res.end(`
    <h1>here is not something you are looking for</h1>`);
})

server.listen(5000);