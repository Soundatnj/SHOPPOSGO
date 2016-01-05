(function() {

	var app = angular.module('ProductCont', [ 'product-service','ngGrid' ]);



	app.controller('ProductController', function($scope, $location, $route,ProductService){
		

		setTimeout(function (){ 
		
		var promise = ProductService.loadProducts();
		
		promise.then(function(bbbbb) {
		$scope.prod = bbbbb;
			
		}, function(reason) {

		}, function(value) {

		}
		
		);
		}, 100);
		
	}
	
	);
	
	

})();

