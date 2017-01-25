;
(function() {
'use strict';

	angular
		.module('vit.shared')
		.controller('SharedController', SharedController);

	SharedController.$inject = ['vitFunc'];

	function SharedController(vitFunc) {
		var vm = this;

		var dropdownDelay = 300;
		
		vm.visibility = {
			menu: false,
			mobileSearch: false,
		};
		vm.menuActivate = false;
		vm.search = '';
		vm.select = {
			clinic: '',
		}; 
		vm.currentYear = new Date().getFullYear();

		vm.toggleVisibility = toggleVisibility;
		vm.setSelectedClinic = setSelectedClinic;
		vm.toggleDropdown = toggleDropdown;

		activate();

		////////////////

		function activate() { 
			window.addEventListener('resize', resizeHandler);
		}


		function setSelectedClinic(clinic) {
			vm.select.clinic = clinic;
		}

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

		function toggleDropdown(event) {
			var target = angular.element(event.target).siblings('[dropdown-list]');
			var wWindow = $(window).width();
			var scrollDesktop = vitFunc.isScrollDesktop();
			var shift = scrollDesktop ? 17 : 0;
			var fullWidth = wWindow + shift;
			var phone = 640;
			
			if (fullWidth < phone) {
				if (!target.is(':visible')) {
					target.show(dropdownDelay);

					return;
				}
				if (target.is(':visible')) {
					target.hide(dropdownDelay);

					return;
				}
			}
		}

		function resizeHandler() {
			var wWindow = $(window).width();
			var dropdownAll = document.querySelectorAll('[dropdown-list]');
			var scrollDesktop = vitFunc.isScrollDesktop();
			var shift = scrollDesktop ? 17 : 0;
			var fullWidth = wWindow + shift;
			var phone = 640;

			if (fullWidth >= phone) {
				for (var i = 0, len = dropdownAll.length; i < len; i++) {
					angular.element(dropdownAll[i]).show(dropdownDelay);
				}
			} else {
				for (var i = 0, len = dropdownAll.length; i < len; i++) {
					angular.element(dropdownAll[i]).hide(dropdownDelay);
				}
			}
		}
	}
})();