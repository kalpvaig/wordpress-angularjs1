app.factory("myfactory",($http,$q)=>{
		var object = {
			callServer:(id)=>{
				var pr = $q.defer();
        var url ="http://api.the2ishindi.com/wp-json/wp/v2/posts/"+id;
				$http.get(url).then(function(data){
					pr.resolve(data);
					
				},function(err){
					pr.reject(err);	
					console.log("Data is Error");
					});
				
				return pr.promise;
				},
			
		}
		return object;
	});	