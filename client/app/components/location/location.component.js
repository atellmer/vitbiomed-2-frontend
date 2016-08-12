;
(function () {
	'use strict';

	angular
		.module('vit.components')
		.component('vitLocation', {
			bindings: {
				center: '<',
				zoom: '<',
				clinics: '<',
			},
			templateUrl: '../app/components/location/location.html',
			controller: ['NgMap', controller],
		});

	function controller(NgMap) {
		var vm = this;

		var BASE_URL = 'https://maps.googleapis.com/maps/api/js';
		var LANG = 'ru';
		var LIBS = 'geometry';
		var API_KEY = 'AIzaSyCaXkTzaRk40Gl9dBxOadZqyhuB_mjG7NI';
		var URL = BASE_URL + '?language=' + LANG + '&libraries=' + LIBS + '&key=' + API_KEY;

		vm.url = URL;

		vm.styles = [
			{
				featureType: "all",
				stylers: [
					{ saturation: -80 }
				]
			}, {
				featureType: "road.arterial",
				elementType: "geometry",
				stylers: [
					{ hue: "red" },
					{ saturation: 50 }
				]
			}, {
				featureType: "poi.business",
				elementType: "labels",
				stylers: [
					{ visibility: "off" }
				]
			}
		];

		activate();

		function activate() { }

	}
})();
