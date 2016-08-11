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
			mobileSearch: false,
		};
		vm.menuActivate = false;
		vm.search = '';

		vm.toggleVisibility = toggleVisibility;

		activate();

		////////////////

		function activate() { }

		function toggleVisibility(type) {
			switch (type) {
				case 'MENU': {
					vm.visibility.menu = !vm.visibility.menu;
					vm.menuActivate = true;
					break;
				}
				case 'MOBILE_SEARCH': {
					vm.visibility.mobileSearch = !vm.visibility.mobileSearch;
					break;
				}
				default: {
					console.error('This type of toggleVisibility() does not exist!');
				}
			}
		}
	}
})();