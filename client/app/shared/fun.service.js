;
(function () {
	'use strict';

	angular
		.module('vit')
		.factory('vitFunc', vitFunc);

	vitFunc.$inject = [];

	function vitFunc() {
		var service = {
			makeArrayOf: makeArrayOf,
			getCurIndexObjectInArray: getCurIndexObjectInArray
		};

		return service;

		////////////////
		function makeArrayOf(value, length) {
			var array = [];

			while (length--) {
				array[length] = value;
			}
			return array;
		}

		function getCurIndexObjectInArray(arrayOfObjects, key, value) {
			for (var i = 0, len = arrayOfObjects.length; i < len; i++) {
				if (arrayOfObjects[i][key] === value) {
					return i;
				}
			}
			return -1;
		}
	}
})();