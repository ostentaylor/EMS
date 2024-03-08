const express = require("express");
const app = express();
const mongoose = require("mongoose"); // Import Mongoose directly
const { config } = require("dotenv");
const corsMiddleware = require("./middlewares/corsMiddleware");
const connectDb = require("./db/db")
app.use(express.json());
// Load environment variables
config();

// Middleware
app.use(corsMiddleware);



// Routes
const employeeRoutes = require("./routes/employee");
app.use("/", employeeRoutes); 


// Start the server
const PORT = process.env.PORT || 3000;

async function start() {
  await connectDb();
  app.listen(PORT, function () {
    console.log(`Server is listening on port ${PORT}`);
  });
}

start();

