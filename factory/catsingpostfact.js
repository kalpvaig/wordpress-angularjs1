app.factory("myfactory2",($http,$q)=>{
		var object = {
		 callServer:(idno)=>{
				var pr = $q.defer();
			  var url="http://api.the2ishindi.com/wp-json/wp/v2/posts?categories="+idno;
			// var url = idno;
                $http.get(url).then(function(data){
					pr.resolve(data);
					//console.log("Data is ",  data.data);
				}
					,function(err){
					pr.reject(err);	
					console.log("Data is Error");
					});
				
				return pr.promise;
				}
		}
		return object;
	});	