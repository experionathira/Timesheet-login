var express=require("express");
var db=require("mysql");
var body_parser= require("body-parser");
var cors = require('cors');
var app=express.Router();

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



app.route('/gettask').post(function (request,response){
    connection.query('SELECT taskid FROM task_details',function(err,rows) {

        var data=JSON.stringify(rows);
        var json=JSON.parse(data);

         // console.log(json);

        var js={"status":'403',"message":"failed","taskid":[]};

        if(err) {
            // console.log(js);
             response.send(js);
        }
        else{
            js.status='200';
            js.message="success";
            js.taskid=json;
            // console.log(js);
            response.send(js);
        }


    })

});

module.exports=app;