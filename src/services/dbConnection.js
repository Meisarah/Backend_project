const mysql = require('mysql');
const config = require('../config.json').database;

let connection = mysql.createConnection(config)

module.exports = connection;