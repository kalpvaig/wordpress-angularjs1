app.controller("myctrl1",($scope,myfactory1,$localStorage)=>{
		$scope.Searchcat=()=>{
			var promise = myfactory1.callServer();
			promise.then((data)=>{
				$scope.result = data.data;
//				console.log($scope.result);
				//console.log("Get the Data in Promise...")
			},(err)=>{
				$scope.result = err;
				console.log("Get the Err in Promise...");
			})
			
		},
			$scope.SingleCat=(idno)=>{
				console.log(idno);
					$scope.IDNO =idno;
			$scope.store1 = $localStorage;
            $scope.store1.idno = $scope.IDNO;
		    console.log($localStorage.idno);
		    location.href = "catsinglepost.html";
			}
	
	
		
		
	});