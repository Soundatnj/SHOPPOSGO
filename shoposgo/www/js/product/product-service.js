(function(){
   var app = angular.module('product-service',['ngResource']);
   app.factory('ProductService',function($http,$resource,$q){
       var service ={
           loadProducts : function(){
               var url = "http://192.168.1.8:8080/shoposgo/viewproducts.web";
               var defer = $q.defer();
               $http.get(url).then(function(result){
                 defer.resolve(result.data);  
               },function(reason){
                   
               },function(value){
                   
               });
               return defer.promise;
           }
       };
       return service;
   });
})();

