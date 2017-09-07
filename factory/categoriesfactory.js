app.factory("myfactory1",($http,$q)=>{
		var object = {
			callServer:()=>{
				var pr = $q.defer();
				var url="http://api.the2ishindi.com/wp-json/wp/v2/categories";
                $http.get(url).then(function(data){
					pr.resolve(data);
					//console.log("Data is Success...",data);
				}
					,function(err){
					pr.reject(err);	
					console.log("Data is Error");
					});
				
				return pr.promise;
				},
			
		}
		return object;
	});	