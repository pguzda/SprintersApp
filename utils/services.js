/* -----------------------------
 * Services
 * ----------------------------- */
 
// JSON service
SprintersApp.factory('JSONservice', function($http) {
	var service = {
		
		// Method used to retrieve a JSON file content
		get: function(filepath) {
			
			var promise = $http({method: 'GET', url: filepath,
					headers:{
						'Content-Type': 'application/json'
					}}).
						then(function(res) {
							if(res.status === 200) {
								var data = res.data;
								return data;
								
							} else {
								console.log('Error: Unable to retrieve data from the server.');
							}
						});
			
			return promise;
			
		},
		
		// Method used to write content in a JSON file
		writeContent: function(url, content) {
			var promise = $http({method: 'POST', url: url, data: JSON.stringify(content) }).
					then(function(res) {
						return res;
					});
			
			return promise;
			
		},
		
	};
	
	return service;
});