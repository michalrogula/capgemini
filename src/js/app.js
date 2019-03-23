/**
 * Capgemini - Coding Exercise
 * 
 * @author: Michal Rogula <michal.rogula@gmail.com>
 * @since: 2019-03-22
 */
(function() {
	
	// Definition of the main app module and its dependencies
	angular.module('myApp', ['dndLists', 'LocalStorageModule']);
	
	// Configuration for angular-local-storage
	angular.module('myApp').config(function (localStorageServiceProvider) {
		
		// change web storage type to sessionStorage
		localStorageServiceProvider.setStorageType('sessionStorage');
	});
	
})();