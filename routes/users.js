const express = require('express');
const router = express.Router();
const conf = require("../config/conf");
const conn = require("../config/connect");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    body = req.body
    conn.query("SELECT * FROM hr where user_name= ? and password = ?", [body.username,body.password], function (err, result, fields) {
        console.log(result);
        user=result[0]
        res_data={}
        if(user==null){
            res_data['pass'] = 0;
            res_data['content'] = "username/password wrong";
        }
        else{
            res_data['pass'] = 1;
            res_data['content'] = user;
        }

        res.send(JSON.stringify(res_data));

    });
});

router.get('/info', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    console.log(req.query.id);
    conn.query("SELECT * FROM employee where employeeid = ?", [req.query.id], function (err, result, fields) {
        console.log(result);
        employee=result[0]
        res.send(JSON.stringify(employee));
    });
});


router.post('/update', function(req, res, next) {




    res.send('respond with a resource123');

});

module.exports = router;
