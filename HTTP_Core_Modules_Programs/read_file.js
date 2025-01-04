//Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using http core module. 
const http = require('http');
const fs = require('fs');
const { log } = require('console');

server = http.createServer((req,res)=>{
    res.writeHead(200, "OK", {"content-type":'text/html'});
    const url = req.url;

    if(url == '/')
    {
        fs.readFile('home.txt',(err,data)=>{
            if(err)
            {
                console.log(err.message);
            }
            else
            {
                res.end(data);
            }
        })
    }
    else if(url == '/about')
    {
        fs.readFile('about.txt',(err,data)=>{
            if(err)
            {
                console.log(err.message);
            }
            else
            {
                res.end(data);
            }
        })
    }
    else if(url == '/contact')
    {
        fs.readFile('contact.txt', (err,data) =>{
            if(err)
            {
                console.log(err.message);
            }
            else
            {
                res.end(data);
            }
        })
    }
    else if(url == '/help')
    {
        fs.readFile('help.txt', (err,data) =>{
            if(err)
            {
                console.log(err.message);
            }
            else
            {
                res.end(data);
            }
        })
    }
    else 
    {
        fs.readFile('error.txt', (err,data) =>{
            if(err)
            {
                console.log(err.message);
            }
            else
            {
                res.end(data);
            }
        })
    }
});

server.listen(1807, ()=>{
    console.log("Server Started On: http://localhost:1807");
})
