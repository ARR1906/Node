var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user :"root",
    password:"Electro2190698",
    database :"mydb"
});

con.connect(function(err){
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 2, 5";
    con.query(sql, function (err, result,fields) {
      if (err) throw err;
      console.log(result);
    });
});
