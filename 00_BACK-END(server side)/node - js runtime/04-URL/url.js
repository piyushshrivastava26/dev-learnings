/* 
const url = require('url');

const myUrl = 'http://example.com:3000/pathname?name=JohnDoe&age=25#section1';

const parsedUrl = url.parse(myUrl, true); // `true` parses the query string into an object

console.log(parsedUrl.hostname);  // example.com
console.log(parsedUrl.port);      // 3000
console.log(parsedUrl.pathname);  // /pathname
console.log(parsedUrl.query);     // { name: 'JohnDoe', age: '25' }
console.log(parsedUrl.hash);      // #section1

*/

const url = require('url');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const log = `On ${(new Date().toLocaleString())}, a new request received at ${req.url} via HTTP server\r\n`;

    // Handle favicon.ico specifically
    if (req.url === '/favicon.ico') {
        res.writeHead(204); // No content
        return res.end();
    }

    fs.appendFile('requests.txt', log, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('Internal Server Error');
        }

        const myURL = url.parse(req.url, true)
        console.log(myURL);
        

        // Handle routing
        switch (myURL.pathname) {
        // switch (req.url) {
            case '/':
                res.end('Welcome to the page');
                break;

            case '/home':
                res.end('Home page');
                break;

            case '/profile':
                const qp = myURL.query.myName
                // res.end('Profile page section');
                res.end(`welcome to the server, ${qp}`)
                break;

            case '/contact':
                res.end('Contact page');
                break;

            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404: Page not found');
        }
    });

    console.log(req.url);
});

const port = 5051;

server.listen(port, () => {
    console.log(`Server is running at port number ${port}`);
});
