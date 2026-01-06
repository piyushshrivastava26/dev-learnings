const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    // res.end('you are on a server built using node js')
    // if (req.url === '/home') {
    //     res.end('home page')
    // }
    // else if (req.url === '/profile') {
    //     res.end('profile section')
    // } 
    // else if (req.url === '/contact') {
    //     res.end('contact section')
    // } 
    // else if (req.url === '/') {
    //     res.end('welcome to an http server')
    // } 
    // else {
    //     res.end('learning and working on node js')
    // }
    
    const log = `On ${(new Date().toLocaleString())}, a new request received at ${req.url} /n`
    fs.appendFile('requests.txt', log, (err, requsettt) => {
        if (err) {
            console.error();
            return
        } else {
            switch (req.url) {
                case '/': res.end('welcome to the page');
                    break;

                case '/home': res.end('home page')
                    break;

                case '/profile': res.end('profile page section')
                    break;

                case '/contact': res.end('contact page')
                    break;

                default:
                    res.end('404 : Page not found')
            }
        }
    })

    console.log(req.url);
})

port = 5600

server.listen(`${port}`, () => {
    console.log(`server is running at port number ${port}`);

})
