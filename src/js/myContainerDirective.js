/**
 * Directive to display single container item.
 * Example: <my-container list="taskpool" id="id" label="label"></my-container>
 * 
 * @author: Michal Rogula <michal.rogula@gmail.com>
 * @since: 2019-03-22
 * 
 * @list - array with task objects (bi-directional binding)
 * @id - type string
 * @label - type string
 */
(function() {
	angular.module('myApp').directive('myContainer', function() {
		
		return {			
			restrict: 'E',
		    replace : true,
		    scope: { list: '=', id: '@', label: '@' },		    
		    template: '<div class="container">' +
						'<label ng-bind="::label"></label>' + 					
         				'<ul class="list" dnd-list="list">' + 
							'<li class="task-item" data-ng-repeat="task in list" dnd-draggable="task" dnd-moved="list.splice($index, 1)" dnd-effect-allowed="move" draggable="true" ng-bind="::task.name"></li>' + 
         					'<div ng-if="id" class="list-id" ng-bind="::id"></div>' + 
         				'</ul>' +         		
		    		  '</div>',
		};
	});
})();