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

const db = require("./app/models");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connect to the database!")
}).catch(err=>{
    console.log("Error connecting", err);
    process.exit();
})

app.get("/", (req, res) => {
    res.json({message: "Welcome!"})
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})