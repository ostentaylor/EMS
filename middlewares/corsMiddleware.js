// middleware/corsMiddleware.js

const cors = require("cors");

// Configure CORS middleware
const corsOptions = {
  origin: "http://localhost:3001", // Change this to your client's origin
};

// Create and export the CORS middleware function
module.exports = cors(corsOptions);
