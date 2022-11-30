const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'https://localhost:8081'
};

app.user(corsOptions)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.json({message: "Welcome!"})
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})