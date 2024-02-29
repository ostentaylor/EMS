const {MongoClient} = require('mongodb');


// let dbConnection
const URI = process.env.URI;


 
const connectToDB = async () => {
   MongoClient.connect(URI)
   .then((client) => {
    console.log("Connected Successfully to MongoDB Server");
    // dbConnection = client.db()
    // return cb()
   })
   .catch(err => {
    console.log("Error connecting to DB", err);
    // return cb(err)
   })
}

module.exports = connectToDB
//  module.exports ={
//     connectToDB:(cb) => {
//         MongoClient.connect(URI)
//            .then((client) => {
//             console.log("Connected Successfully to MongoDB Server");
//             // dbConnection = client.db()
//             // return cb()
//            })
//            .catch(err => {
//             console.log("Error connecting to DB", err);
//             // return cb(err)
//            })
//     },
//    //  getDB: () => dbConnection
//  }