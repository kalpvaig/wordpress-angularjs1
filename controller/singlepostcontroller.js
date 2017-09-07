app.controller("myctrl",($scope,myfactory,$localStorage,$sce)=>{
		 datastore=$localStorage;
//		console.log(datastore.id);
	    $scope.doSearch=()=>{
			var promise = myfactory.callServer(datastore.id);
			promise.then((data)=>{
				$scope.result = data.data.content.rendered;
				$scope.datiledpost = $sce.trustAsHtml($scope.result);
//				console.log($scope.datiledpost);
//				console.log("single Data is Success...",data);
				$scope.img =data.data.better_featured_image.media_details.sizes.medium.source_url;
				console.log($scope.img);

			},(err)=>{
				$scope.result = err;
				
			})
			
		}
		
		
	});