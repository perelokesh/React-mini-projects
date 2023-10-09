const express = require('express');
const cors = require('cors');
const dbConnection = require('./db.js');
const todoRoutes = require('./Routes/TodoRoutes.js');
const userRoutes = require('./Routes/UserRoutes.js');
require('dotenv').config();


const app = express();
const port = process.env.PORT ;

dbConnection;
app.use(express.json());
app.use(cors({origin: true}));


app.use('/api', todoRoutes);
app.use('/api', userRoutes);
app.listen(port, () =>{
  console.log(`server is working on ${port}`);
});