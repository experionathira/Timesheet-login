var express=require("express");
var db=require("mysql");
var body_parser= require("body-parser");
var cors = require('cors');
var app=express.Router();
var jwt = require('jsonwebtoken');

var exp=express();


exp.use(cors());
exp.use(body_parser.urlencoded({extended:true}));
exp.use(body_parser.json());


var connection=db.createConnection({
    host: 'localhost',
    user: 'root',
    password:'mysql',
    database: 'db_node'
});


//Gettask1

app.route('/gettaskid').post(function (request,response){

    var token=request.body.token1;
    var decoded = jwt.verify(token, 'athira');
    // console.log(decoded);

  
    var js= {"status":'403',"message":"failed","task_id":""};



    connection.query('SELECT taskid FROM assigntask where empid= "'+decoded.userid+'"', function(err,rows){

        var data=JSON.stringify(rows);
        var json=JSON.parse(data);

        if(err) {
            console.log(js);
            response.send(js);
        }

        else {
            js.status='200';
            js.message="success";
            js.task_id=json;
            js.token=decoded;
            response.send(js);
        }
    })

});

module.exports=app;