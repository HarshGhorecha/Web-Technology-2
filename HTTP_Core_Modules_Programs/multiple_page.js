// Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.writeHead(200, "OK", {"content-type": 'text/html' });
        res.end("<h1>Wellcome To The FIGHT CLUBE!</h1><p><h3>'The first rule of FIGHT CLUBE is : You do not talk about the FIGHT CLUBE.'</h3></p>");
    }
    else if(req.url == '/about')
    {
        res.writeHead(200, "OK", {"content-type": 'text/html' });
        res.end("<h1>About FIGHT CLUBE</h1><p><h3>'FIGHT CLUBE is a 2025 WEB-APP , Developed By :HARSH GHORECHA.'</h3></p>");
    }
    else if(req.url == '/contact')
    {
        res.writeHead(200, "OK", {"content-type": 'text/html' });
        res.end('<h1>Contact Us</h1><p><h4>Email us at: fightclub1807@fc.com</h4></p>');
    }
    else if(req.url == '/help')
    {
        res.writeHead(200, "OK", {"content-type": 'text/html'});
        res.end('<h1>Famous Quotes</h1><ul><li>"It\'s only after we\'ve lost everything that we\'re free to do anything."</li><li>"The things you own end up owning you."</li><li>"You met me at a very strange time in my life."</li></ul>');
    }
    else
    {
        res.writeHead(404,"Not Found", {"content-type":'text/html'});
        res.end("<h1>404 Not Found</h1><p><h3>The page you are looking for does not exist.</h3></p>");
    }
});

server.listen(1807, () =>
{
    console.log("Server is Started:");
    console.log("Register For Fight Clube Here:-> http://localhost:1807");
});
