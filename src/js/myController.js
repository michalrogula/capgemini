/**
 * Main controller 
 * 
 * @author: Michal Rogula <michal.rogula@gmail.com>
 * @since: 2019-03-22
 */
(function() {

	angular.module('myApp').controller('MyController', MyController);
  
	MyController.$inject = ['$scope', 'localStorageService'];
	
	function MyController($scope, localStorageService) {
		
		const pool_size = 15;
		const cache_key = "capgemini_tasks";		
		$scope.lists = { "taskpool": [], "user1pool": [], "user2pool": [], "user3pool": [] };
		
		// IMPORTANT: localStorageService has been configured to use sessionStorage (check app.js)		
		// if storage supported and data exists then use data from storage OTHERWISE generate initial model (all tasks in pool)
		if(localStorageService.isSupported && localStorageService.keys().includes(cache_key))
		    $scope.lists = JSON.parse(localStorageService.get(cache_key));
		else		   
			$scope.lists.taskpool = new Array(pool_size).fill(0).map( (a,i) => ({name: `Task ${i+1}`}) );
		
		// watch state of the task assigment and persist to sessionStorage (formatted as JSON string)
	    $scope.$watch('lists', (newValue) => { 
	    	if(localStorageService.isSupported)
	    		localStorageService.set(cache_key, JSON.stringify(newValue)) 
	    }, true)	    
	}
})();