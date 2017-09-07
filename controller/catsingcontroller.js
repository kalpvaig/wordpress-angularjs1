app.controller("myctrl2",($scope,myfactory2,$localStorage)=>{
	  datastore1=$localStorage;
//		console.log(datastore1.idno);
	  $scope.SearchCate=()=>{
     var promise = myfactory2.callServer(datastore1.idno);
//		  console.log(datastore1.idno);
			promise.then((data)=>{
				$scope.result1 = data.data;
//				console.log("data is " ,$scope.result1);
				
				
			},(err)=>{
				$scope.result1 = err;
				console.log("Get the Err in Promise...");
			})
			
		},
			
	$scope.SingPost=(idn)=>{
			$scope.ID =idn;
			$scope.store = $localStorage;
            $scope.store.id = $scope.ID;
		    console.log($localStorage.id);
		    location.href = "singlepost.html";
		}
		
		
	});