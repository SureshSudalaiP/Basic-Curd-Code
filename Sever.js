var path = require("path");
var express = require("express");
var bodyparser = require("body-parser");
var routes = require("./routes");

	var app = express();
	
	app.use(bodyparser.urlencoded({limit:'50mb',extended:true}));
	app.use(bodyparser.json({limit:'50mb'}));
	
	app.use(express.static(path.join(__dirname,"./www")));
	  
	
	 app.use(function(req,res,next)
	{
		res.header("Access-Control-Allow-Origin","*");
		res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
		next();
	});
	 
	routes.configure(app);
	
	var server = app.listen(8086,function()
			{console.log("server listen on :"+server.address().port);}
	)
	