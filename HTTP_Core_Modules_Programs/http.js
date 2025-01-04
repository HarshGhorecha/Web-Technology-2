const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200, "OK", {"content-type":'text/html'});
    res.end("<h1>Welcome To The Fight Clube!</h1>");
});

server.listen(1807,() => {
    console.log("Register For Fight Clube Here:-> http://localhost:1807");
});
