function Sprinters($scope, $http, JSONservice) {
	
	$scope.sprintersdata;
	
	$scope.edited;
	
	var sprintersJsonPath = basepath + '/models/sprinters.json',
		sprintersdetJsonPath = basepath + '/models/sprinters-details.json';
	
	$scope.init = function() {
	
		$scope.getSprinters(); // Init sprinters
		
	};
	
	/* Method used to get sprinters data.
	 * ---------------------------- */
	$scope.getSprinters = function(idOpened) {
		// Get Sprinters names & ids
		JSONservice.get(sprintersJsonPath).then(function(res) {
			var sprinters = res.sprinters;
			
			// Get sprinters details
			JSONservice.get(sprintersdetJsonPath).then(function(res2) {
				var sprintersdata = [],
					details = res2.details;
				for(var i in sprinters) {
					for(var j in details) {
						if(sprinters[i].id == details[j].idSprinter) {
							// Determine if item is opened (by its id)
							var opened = false;
							if(idOpened) {
								if(idOpened == sprinters[i].id)
									opened = true;
							}
							
							// Create object
							var infos = {
								id: sprinters[i].id,
								name: sprinters[i].name,
								open: opened,
								details: details[j]
							};
							
							sprintersdata.push(infos);
						}
					}
				}
				
				$scope.sprintersdata = sprintersdata;
			});
		});
	};
	
	// -------------------------------------------------
	// Methods below are used to perform sprinters data modificatons.
	// -------------------------------------------------
	
	/* Method used to edit sprinters data.
	 * ---------------------------- */
	$scope.editDetails = function(idSprinter) {
		$scope.edited = idSprinter;
		for(var i in $scope.sprintersdata) {
			if($scope.sprintersdata[i].id == idSprinter)
				editeddetails = $scope.sprintersdata[i];
		}
	};
	
	/* Method used to edit sprinters data.
	 * ---------------------------- */
	$scope.saveDetails = function(idSprinter) {
		// Format data
		var jsondata =        { sprinters: [] },
			jsondatadetails = { details: [] };
		for(var i in $scope.sprintersdata) {
			var jsondataobj = {
				name: $scope.sprintersdata[i].name,
				id: parseInt(i)+1
			};
			
			jsondata.sprinters.push(jsondataobj);
			jsondatadetails.details.push($scope.sprintersdata[i].details);
		}
		
		// Save data in JSON file
		// --Name
		JSONservice.writeContent(basepath + '/models/savedata-name.php', jsondata).then(function(res) {
			// Reload files (refresh data)
			$scope.getSprinters(idSprinter);
			$scope.edited = null;
		});
		// --Details
		JSONservice.writeContent(basepath + '/models/savedata.php', jsondatadetails).then(function(res) {
			// Reload files (refresh data)
			$scope.getSprinters(idSprinter);
			$scope.edited = null;
		});
	};
	
	/* Cancel edit action
	 * ---------------------------- */
	$scope.cancel = function(idSprinter) {
		$scope.edited = null; // No entry edited
		$scope.getSprinters(idSprinter); // Reload data
	};
}