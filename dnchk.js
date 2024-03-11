const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: "a22f924f0f9fa4f779d92c4f2c291373-242620234.ap-south-1.elb.amazonaws.com",
    user: "root",
    password: "Shruti@991001",
    port: 3306
    database: 'pharmacy'
    connectionLimit: 10, // Adjust the connection pool size as needed
});

// Define a function that executes a query and returns the results
module.exports = {
  getData: function(sql, param, callback) {
    connection.query(sql, param, function(err, results, fields) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }
};
