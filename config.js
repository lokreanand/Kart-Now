var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'database-1.clrejq9hlvsy.ap-south-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'e-commerce#7867',
  database: 'kartnow'
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

module.exports = connection;