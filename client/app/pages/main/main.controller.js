;
(function() {
'use strict';

	angular
		.module('vit.pages')
		.controller('MainPageController', MainPageController);

	MainPageController.$inject = ['$timeout'];

	function MainPageController($timeout) {
		var vm = this;

		var dropdownDelay = 300;

		vm.clinicsLocations = [
			{
				address: 'Москва, м. Новоясневская, Новоясеневский проспект, д. 25',
				phone: '+7 (495) 867-18-19',
			},
			{
				address: 'Москва, Новорязанская ул. 36',
				phone: '+7 (495) 867-18-19',
			},
			{
				address: 'Москва, Тучковская ул. 6',
				phone: '+7 (495) 867-18-19',
			},
			{
				address: 'Москва, Большая Татарская ул. 6',
				phone: '+7 (495) 867-18-19',
			},
			{
				address: 'Москва, Александра Невского ул. 27',
				phone: '+7 (495) 867-18-19',
			},
		];

		vm.selectedClinic = '';

		vm.toggleDropdown = toggleDropdown;
		vm.showSelectedClinic = showSelectedClinic;
		

		activate();

		////////////////
		function activate() { 
			window.addEventListener('resize', resizeHandler);
		}

		function showSelectedClinic() {
			$timeout(function() {
				console.log('selected clinic: ', vm.selectedClinic);
			}, 0);	
		}

		function toggleDropdown(event) {
			var target = angular.element(event.target).siblings('[dropdown-list]');
			var wWindow = $(window).width();
			var scrollDesktop = isScrollDesktop();
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