const express = require('express');
const path = require('path');
const app = express();
const port = 5123;

app.get('/', (req, res) => {
    res.send(`<h1>Welcome To The HOME PAGE</h1><p>To view my portfolio, visit: <a href="http://localhost:${port}/portfolio">Portfolio</a></p>`)
})

app.get('/portfolio' , (req, res) => {
    res.sendFile(path.join(__dirname, 'Demo_portfolio.html'),(err) =>
    {
        if(err)
        {
            res.status(500).send("Error Loading the Portfolio File");
        }
    })
})

app.listen(port, ( ) => 
{
    console.log(`Server is started at on: http://localhost:${port}`);
})
