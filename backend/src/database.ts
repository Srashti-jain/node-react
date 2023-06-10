import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_typescript'
  });
  connection.connect((err:Error|null):void=>{
    if(err)
    {
        console.warn("error")
    }
    else{
        console.warn("connected")
    }
  })
export=connection;