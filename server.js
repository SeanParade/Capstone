var mysql  = require('mysql');
var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'breaddaddy',
  database : 'testDB'
});

dbconn.connect(function(err){
  if(err){
    console.log('Database connection error');
  }else{
    console.log('Database connection successful');
  }
});
