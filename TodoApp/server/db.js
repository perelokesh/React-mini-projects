const mongoose = require('mongoose');
require('dotenv').config();

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
  dbName: 'Todo_App'

};
const connection = process.env.DB;

let dbConnection;
try {
  mongoose.connect(connection, connectionParams);
  console.log("Connected to database successfully");
} catch (error) {
  console.log(error);
  console.log("Could not connect database!");
}

module.exports =dbConnection;