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

app.route('/assigntask').post(function (request,response) {
    console.log("assigntask");
    var emp_id=request.body.empid;
    var emp_name=request.body.empname;
    var task_id=request.body.taskid;
    console.log( emp_id, emp_name, task_id );
    var post={};
    connection.query('SELECT user_id FROM user_details WHERE user_id= "'+emp_id+'"' ,function ( err, rows) {
        var data=JSON.stringify(rows);
        var json=JSON.parse(data);
        var js= {"status":'403',"message":"failed"};

        if(err) {
            console.log("err");
            response.send(js);
        }

        else {

             if (emp_id==json[0].user_id) {

                post={ empid:emp_id, taskid:task_id };

                connection.query('INSERT INTO assigntask SET ?' , post,function (err,result) {

                    if (err) {

                        response.send(js);
                    }

                    else {
                        js.status='200';
                        js.message="success";
                        response.send(js);
                    }

                })
            }

        }

    });
});


module.exports=app;
