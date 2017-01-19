var express=require("express");
var db=require("mysql");
var body_parser= require("body-parser");
var cors = require('cors');
var app=express.Router();
var jwt=require('jsonwebtoken');

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


//Login

app.route ('/').post (function (request,response){

    var user_id=request.body.userid;
    var pass=request.body.password;
    console.log(user_id,pass);
    connection.query("select user_id,password,user_type,user_name from user_details where user_id=?",[user_id],function(err,rows){

        var data=JSON.stringify(rows);
        var json=JSON.parse(data);

   
        var js={"status":'403',"message":"failed","flag":'0'};
        console.log(typeof json);
        for (var i = 0; i < json.length; i++) {
            if(user_id==json[i].user_id&& pass==json[i].password) {
                    if(json[i].user_type==0) {
                        console.log("success");
                        js.status='200';
                        js.message="success";
                        js.flag=0;
                        
                    }
                    else {
                        js.status='200';
                        js.message="success";
                        js.flag=1;
                    }
                    
            }
            
        };
         var token = jwt.sign({ userid: json[0].user_id,role:js.user_type,username:json[0].user_name}, 'athira',{expiresIn:60*10000});
         js.token=token;
        response.send(js);

            
    });
   
});

module.exports=app;