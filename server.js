'use strict'
const env        = process.env.NODE_ENV || 'development';
const DEV        = env==='development';
const dotenv     = (DEV) ? require('dotenv').config() : undefined;
const express       = require('express');
const path          = require('path');
const logger        = require('morgan');
const app           = express();
const bodyParser    = require('body-parser');
const userRoute = require('./controllers/user.js');
const itemRoute = require('./controllers/item.js');
const apiRoute = require('./controllers/api.js');
const PORT          = process.env.PORT || 3000;

app.set('superSecret', 'I love pizza')

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

app.use('/users', userRoute)
app.use('/items', itemRoute)
app.use('/api', apiRoute)

app.listen(PORT, ()=> console.log('server started, listening on', PORT));
