
var DetailsArray = [];

this.SaveDeatils = function(details,res)
{
	if(!details.id)
	{
	if(DetailsArray.length <= 0)
	{
		DetailsArray.push({'id':1,'name':details.name,'email':details.email,'mobile':details.mobile});
	}
	else
	{
			var inseertedid = DetailsArray[DetailsArray.length -1].id + 1;
		DetailsArray.push({'id':inseertedid,'name':details.name,'email':details.email,'mobile':details.mobile});
	}
	res.send({message:"record inserted successfully",status:0});
	}
	
	if(details.id)
	{
			for(var i = 0 ; i < DetailsArray.length;i++)
			{
				if(DetailsArray[i].id == details.id)
				{
					DetailsArray[i].name = details.name;
					DetailsArray[i].email = details.email;
					DetailsArray[i].mobile = details.mobile;
					break;
				}
			}
			res.send({message:"record updated successfully",status:0});
	}
}

this.GetDetailsList = function(req,res)
{
	res.send(DetailsArray);
}

this.GetDetails = function(index,res)
{
	res.send(DetailsArray[index]);
}

this.deleteDetails = function(index,res)
{
		DetailsArray.splice(DetailsArray[index],1);
	res.send({message:'Record deleted successfully',status:0});
}