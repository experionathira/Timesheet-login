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

var loginrouter = require('./login');
var addTaskrouter= require('./addTask');
var gettaskidrouter=require('./getTaskid');
var assignTaskrouter=require('./assignTask');
var getTask1router=require('./getTask1');
var saveTaskrouter=require('./saveTask');
var getValuerouter=require('./getValue');
var adminViewrouter=require('./adminView');

exp.use('/',app);
exp.use('/',loginrouter);
exp.use('/',addTaskrouter);
exp.use('/', gettaskidrouter);
exp.use('/',addTaskrouter);
exp.use('/',getTask1router);
exp.use('/',saveTaskrouter);
exp.use('/',getValuerouter);
exp.use('/', adminViewrouter);
exp.use('/',assignTaskrouter);
var server = exp.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening at %s on port %s", host, port);
});