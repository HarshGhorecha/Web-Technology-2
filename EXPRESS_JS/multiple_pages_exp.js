// //Create a webapp with 5 pages like about, contact etc.. using ExpressJS
const express = require('express');
const app = express();
const port = 2004;

app.get('/', (req,res) => {
    res.send("<h1>Wellcome To The FIGHT CLUBE!</h1><p><h3>'The First Rule Of The FIGHT CLUBE is : YOU DO NOT TALK ABOUT THE FIGHT CLUBE'</h3></p>")
})

app.get('/about', (req,res) => {
    res.send("<h1>About FIGHT CLUBE</h1><p><h3>'Fight Clube is 2025 WEB-APP, Developed by: HARSH GHORECHA.'</h3></p>")
})

app.get('/contact', (req, res) => {
    res.send("<h1>Contact us</h1><p><h4>Email us at: fightclube1807@fc.com</h4></p>")
})

app.get('/help', (req, res) => {
    res.send("<h1>Famous Quotes</h1><p><h4>It's only after we're lost everything that we're free to do anything</h4></p>")
})
app.get('*', (req, res) => {
    res.status(404).send("<h1>404 Not Found</h1><p><h3>The page you are looking for does not exist.</h3></p>");
})

app.listen(port, () => {
    console.log("Server is Started: ");
    console.log(`Register for Fight Clube Here:-> http://localhost:${port}`)
})
