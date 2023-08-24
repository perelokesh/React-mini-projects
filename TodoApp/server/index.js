const express = require('express');
const cors = require('cors');
const dbConnection = require('./db.js');
const router = require('./Routes/TodoRoutes.js');
require('dotenv').config();


const app = express();
const port = process.env.PORT ;

dbConnection;
app.use(express.json());
app.use(cors({origin: true}));


app.use('/api', router);
app.listen(port, () =>{
  console.log(`server is working on ${port}`);
});