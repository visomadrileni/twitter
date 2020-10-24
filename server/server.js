const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const auth = require('./router/auth');
const connectDB = require('./config/db');
const port = process.env.PORT;

connectDB();
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended: true }));  
app.use(express.static("public"));
app.use(auth);

app.listen(port, () => console.log('App is running on port ' +port))
