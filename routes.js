var model = require("./models/model");

   module.exports ={
	   
	   
	   configure:function(app)
	   {
		   app.post("/api/SaveDeatils",function(req,res){
			   model.SaveDeatils(req.body,res);
		   });
		   
		   app.get("/api/GetDetailsList/",function(req,res){
			   model.GetDetailsList(req,res);
		   })
		   
		   app.get("/api/GetDetails/:index",function(req,res){
			   model.GetDetails(req.params.index,res);
		   })
		   
		   app.delete("/api/deleteDetails/:index",function(req,res){
			   model.deleteDetails(req.params.index,res);
		   })
		   
	   }
   }