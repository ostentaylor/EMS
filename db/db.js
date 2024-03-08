const mongoose = require('mongoose');
require('dotenv').config();



const uri = process.env.MONGO_URI;

const connectDb = () => {
    mongoose
      .connect(uri)
      .then(() => {
        console.log("🚀 Connected to MongoDB Successfully");
      })
      .catch((err) => {
        console.error("Error connecting to DB", err);
      });
}
module.exports = connectDb;



    // const connectToMongo = async () => {
    //     try {
    //       await mongoose.connect(process.env.MONGO_URI);// Connect to MongoDB first
    //       app.listen(port, () => {
    //         console.log(`Server is running at http://127.0.0.1:${port}`);
    //       });
    //     } catch (err) {
    //       console.error('Error starting server:', err);
    //       process.exit(1);
    //     }
    //   };

// module.exports = mongoose.connection;
// module.exports =  connectToMongo;  // Export the function so it can be used elsewhere
