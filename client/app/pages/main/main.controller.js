;
(function() {
'use strict';

	angular
		.module('vit.pages')
		.controller('MainPageController', MainPageController);

	MainPageController.$inject = [];

	function MainPageController() {
		var vm = this;

		var dropdownDelay = 300;

		vm.toggleDropdown = toggleDropdown;
		

		activate();

		////////////////
		function activate() { 
			document,addEventListener('resize', resizeHandler);
		}

		function toggleDropdown(event) {
			var target = angular.element(event.target).siblings('[dropdown-list]');
			

			if (!target.is(':visible')) {
				target.show(dropdownDelay);

				return;
			}
			if (target.is(':visible')) {
				target.hide(dropdownDelay);

				return;
			}
		}

		function resizeHandler() {
			var wWindow = $(window).width();
			var dropdownAll = document.querySelectorAll('[dropdown-list]');
			var scrollDesktop = isScrollDesktop();
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

		function isScrollDesktop() {
			if (window.innerWidth !== document.documentElement.clientWidth) {
				return true;
			}

			return false;
		}
	}
})();