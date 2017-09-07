app.controller("myctrl",($scope,myfactory,$localStorage)=>{
        $scope.doSearch=()=>{
			var promise = myfactory.callServer();
		   promise.then((data)=>{
				$scope.result = data.data;
			   //console.log($scope.result);
			  },(err)=>{
				$scope.result = err;
				
			})
			
		}
		$scope.SinglePost=(idn)=>{
			$scope.ID =idn;
			$scope.store = $localStorage;
            $scope.store.id = $scope.ID;
//		    console.log($localStorage.id);
		    location.href = "singlepost.html";
		}
		
		
	});