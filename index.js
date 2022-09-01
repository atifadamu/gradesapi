const express = require('express');
const dotenv = require("dotenv");
const results = require('./results')
dotenv.config();
const app = express();

//route
app.get("/", (req, res) => {
    res.send("Welcome to our portal")
})
    
// get all results
app.get("/results", (req, res) => {
    res.json(results)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
console.log(`server is running on ${PORT}`))
