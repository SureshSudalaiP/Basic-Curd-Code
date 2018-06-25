var myapp = angular.module("myapp",[]);

myapp.controller("MyController",function($scope,$http,$window){
	
	
	$scope.GetDetailsList = function()
	{
		$http({
			method:'GET',
			url:'http://localhost:8086/api/GetDetailsList/',
			dataType:'jsonp'
		}).then(function(response){
			$scope.detailsList = response.data;
		})
	};
	
	$scope.GetDetails = function(index)
	{
		$scope.details = [];
		$http({
			method:'GET',
			url:'http://localhost:8086/api/GetDetails/'+index,
			dataType:'jsonp'
		}).then(function(response){
			document.getElementById('svbtn').innerHTML = "Edit";
			$scope.details.push(response.data);
		})
	};
	
	$scope.deleteDetails = function(index)
	{
		var yes = confirm("Are You sure")
		if(yes)
		{
		$http({
			method:'DELETE',
			url:'http://localhost:8086/api/deleteDetails/'+index,
			dataType:'jsonp'
		}).then(function(response){
			alert(response.data.message);
			location.reload();
		})
		}
	};
	
	$scope.SaveDetails = function()
	{
		console.log($scope.details)
		$http({
			method:'POST',
			url:'api/SaveDeatils/',
			data: $scope.details[0],
			headers : {'Content-Type': 'application/json'} 
		}).success(function(data){
			alert(data.message);
			$scope.details = null;
			$scope.GetDetailsList();
		})
	};
	
});