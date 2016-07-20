'use strict'

const express       = require('express');
const path          = require('path');
const logger        = require('morgan');
const app           = express();
const bodyParser    = require('body-parser');
const userRoute = require('./controllers/user.js');
const itemsRoute = require('./controllers/items.js');
const PORT          = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/users', userRoute)
app.use('/items', itemRoute)

app.listen(PORT, ()=> console.log('server started, listening on', PORT));
