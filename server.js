const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');

require('dotenv').config();



//const PORT=process.env.PORT;
const helmet = require('helmet');
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(helmet.hidePoweredBy());
app.use(cors());



app.use('/', require('./routes/global'));

app.listen(3000, 'localhost', () => {
    console.log("server running on port ", 3000);
});