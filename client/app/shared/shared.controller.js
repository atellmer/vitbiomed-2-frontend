;
(function() {
'use strict';

	angular
		.module('vit')
		.controller('SharedController', SharedController);

	SharedController.$inject = [];

	function SharedController() {
		var vm = this;
		

		vm.visibility = {
			menu: false,
		};

		vm.toggleVisibility = toggleVisibility;

		activate();

		////////////////

		function activate() { }

		function toggleVisibility(type) {
			switch (type) {
				case 'menu': {
					vm.visibility.menu = !vm.visibility.menu;
				}
			}
		}
	}
})();