const express = require('express');
const app = express();
const config = require('./config.json').server;
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')

app.use(cors())
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'miawmiaw'
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', require('./routes'));

app.listen(config.port, () => console.log(`Server Run in port ${config.port}`))