;
(function () {
	'use strict';

	var template = [
		'<div map-lazy-load="https://maps.google.com/maps/api/js" map-lazy-load-params="{{ $ctrl.url }}" class="vit-location">',
		'<ng-map center="{{ ::$ctrl.center }}" zoom="{{ ::$ctrl.zoom }}" styles="{{ ::$ctrl.styles }}" class="vit-location__frame">',
		'<custom-marker position="[{{ clinic.address }}]" ng-repeat="clinic in $ctrl.clinics track by $index">',
		'<div>',
		'<div class="vit-location__marker">',
		'<div class="vit-location__tooltip">',
		'<span class="vit-location__title">Ближайшая к вам клиника:</span>',
		'<br>',
		'<span class="vit-location__address">{{ clinic.address }}</span>',
		'<br>',
		'<span class="vit-location__phone">{{ clinic.phone }}</span>',
		'</div>',
		'</div>',
		'</div>',
		'</custom-marker>',
		'</ng-map>',
		'</div>',
	].join('');

	angular
		.module('vit.components')
		.component('vitLocation', {
			bindings: {
				center: '<',
				zoom: '<',
				clinics: '<',
			},
			template: template,
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
