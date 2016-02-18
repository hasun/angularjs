/**
 * 
 */
var myAppModule = angular.module("myAppModule", []);

myAppModule.filter('stripDashes', function () {
	// the function we are in returns
	// the function below
	return function(txt) {
		return txt.split('-').join(' ');
	};
});


myAppModule.filter("toTitleCase", function () {
	return function (str) {
		return str.replace(/\w\S*/g, function(txt){ return txt.charAt(0).toUpperCase() + txt.
		substr(1).toLowerCase();});
	};
});

myAppModule.directive('colorList', function ($compile) {
	return {
		restrict: 'AE',
		template: "<button ng-click='showHideColors()' type='button'>"
			+ "{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}"
			+ "</button><div ng-hide='isHidden' id='colorContainer'>"
			+ "</div>",
		link: function ($scope, $element) {
			// set default state of hide/show
			$scope.isHidden = true;
			// add function to manage hide/show state
			$scope.showHideColors = function () {
				$scope.isHidden = !$scope.isHidden;
			}
			// add colors divs to the document
			var colorContainer = $element.find('div');
			
			angular.forEach($scope.colorsArray, function (color) {
				var appendString = "<div style='background-color:" + color + "'>" + color + "</div>";
				colorContainer.append(appendString);
			});
		}
	};
});