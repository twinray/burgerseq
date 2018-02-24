// Pull in required dependencies
//boilerplate template
// this file requires this package 
var mysql = require('mysql');

// Create the MySQL connection object that you can work with 


// there is a way for you to connect with Heroku through an URL

    // DB is local on localhost
    // connection object to our mysql data base (burgers_db)
var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '888Locative',
        database: 'burgers_db'
});


// Make the connection to MySQL
// this is a call back function
// it has a connect then do this function 
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use// 
// its taking the connection object wherever it requires 
// look for this in the orm file. its in the first line
module.exports = connection; 