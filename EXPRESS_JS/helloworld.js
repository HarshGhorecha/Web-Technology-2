const express = require('express');
const app = express();

const PORT = 1807;

app.get('/',(req,res) => {
    res.send("Hello, world!");
});

app.listen(PORT, () => {
    console.log(`Server is running at: http//:localhost:${PORT}`);
});
