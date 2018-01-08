const http = require('http');
const hostName = "127.0.0.1";
const port = 3000;


const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world')
})
server.listen(port, hostName, () => {
        console.log(`server running at http:${hostName}${port}`)
    })
    /* So here’s how it is, how it’s always been: a browser sends a request
     to a website. The site’s server receives the request, tracks down the 
     requested file, performs any database queries as needed, and sends a 
     response to the browser. In traditional web servers, such as Apache, 
     each request causes the server to create a new system process to handle
     request
     */