var express=require("express");
var db=require("mysql");
var body_parser= require("body-parser");
var cors = require('cors');
var app=express.Router();
var moment = require('moment');
var exp=express();
var jwt = require('jsonwebtoken');


exp.use(cors());
exp.use(body_parser.urlencoded({extended:true}));
exp.use(body_parser.json());


var connection=db.createConnection({
    host: 'localhost',
    user: 'root',
    password:'mysql',
    database: 'db_node'
});

app.route('/getvalue').post(function (request, response){
    var js= {"status":'403',"message":"failed"};
    var firstday= request.body.date;
    
    firstday=JSON.parse(firstday);
    var token=request.body.token1;
    var decoded = jwt.verify(token, 'athira');
  
   
      
        connection.query("SELECT * FROM employee_task WHERE emp_id= ? AND  date IN (?) ",[decoded.userid, firstday], function (err,rows) {
        
        var data=JSON.stringify(rows);
        var json=JSON.parse(data);

        json.map((x) => {
            x.date = moment(x.date).format('YYYY-MM-DD');
            return x;
        });

        
        response.send(json);
         
     });
      
     
})

module.exports=app;