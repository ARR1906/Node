var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Electro2190698",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE customers ADD COLUMN Id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function(err,result){
    if(err) throw err;
    console.log("Tabla creada")
  })
});

