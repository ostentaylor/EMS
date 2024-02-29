const express = require('express');
const app = express();
const connectToDB = require("./db")
const mongoose = require('mongoose')
const { config } = require('dotenv');
const employeeRoutes =  require("./routes/employee")
config()

app.get('/', (req, res) => {
    res.send('good afternoon');
});

app.use("/", employeeRoutes)

const port = process.env.port ||  3000;

const startsProcess = async () => {

    await connectToDB()
    app.listen(port, ()=> {
    console.log(`Server  is running at http://localhost:${port}`);
    });
    
}
startsProcess()
