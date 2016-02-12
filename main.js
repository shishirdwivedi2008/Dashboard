var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require("mysql");
var http = require('http');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('AutomationGraph/webapplayers.com/inspinia_admin-v2.4'))
app.use(bodyParser());

//DB connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "shishir",
  database: "payu"
});


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.sendFile('D:\\node_project\\AutomationGraph\\webapplayers.com\\inspinia_admin-v2.4/login.html');
});

app.get('/sample', function(req, res) {
  res.render('chat_view.html');
});

app.route('/login').get(function (req, res) {
    res.sendFile('D:\\node_project\\AutomationGraph\\webapplayers.com\\inspinia_admin-v2.4/login.html');
	
});

app.route('/index').post(function(req,res){
	try{
	var username=req.body.username;
	var pwd=req.body.password;
	if(username==pwd){
    //console.log(req);
	res.sendFile('D:\\node_project\\AutomationGraph\\webapplayers.com\\inspinia_admin-v2.4/pages/index.html');
	}
	}catch(e){
		res.redirect('/');
	}
	
	
	
});


app.route('/getData').get(function(req,res){
	con.query('select * from transaction t where t.status=? limit 10;',['captured'],function(err,rows){
	 res.setHeader('Content-Type', 'application/json');
	 res.send(JSON.stringify(rows));

});


app.route('/hello').get(function(req,res){
	res.sendFile('D:\\node_project\\AutomationGraph\\webapplayers.com\\inspinia_admin-v2.4/pages/sample.html');
	
});


















});

app.listen(80);