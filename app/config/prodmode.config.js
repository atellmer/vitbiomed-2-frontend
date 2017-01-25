;
(function() {
	'use strict';
	
	angular
		.module('vit')
		.config(prodMode);

	prodMode.$inject = ['$compileProvider'];

	function prodMode($compileProvider) {
		//$compileProvider.debugInfoEnabled(false);
	}
})();