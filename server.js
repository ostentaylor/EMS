const express = require('express');
const app = express();
const connectToDB = require("./db")
const mongoose = require('mongoose')
const { config } = require('dotenv');
config()

app.get('/', (req, res) => {
    res.send('');
});

const port = process.env.port ||  3000;

const startsProcess = async () => {

    await connectToDB()
    app.listen(port, ()=> {
    console.log(`Server  is running at http://localhost:${port}`);
    });
    
}
startsProcess()
