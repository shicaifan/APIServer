const mysql = require("mysql");
const conf = require("./conf");
let conn;
function connect(){  
    conn = mysql.createConnection(conf.mysql);  
    conn.connect(function(err){  
        if(err){  
            console.log("fail to connect to the mysql server " + err.message);  
            throw err;  
        }  
    });  
    conn.on("error",function(err){  
        if(err.code == "PROTOCOL_CONNECTION_LOST"){  
            console.log("try to connect to mysql server...");  
            connect();
        }else{
            console.log("fail to connect to the mysql server" + err.message);
            throw err;  
        }  
    });
}
connect();

module.exports = conn;
