;
(function () {
	'use strict';

	var template = [
		'<div class="vit-slider">',
		'<div class="vit-slider__content">',
		'<ng-transclude></ng-transclude>',
		'</div>',
		'<div class="vit-slider__controls">',
		'<div hm-tap="$ctrl.changeContent(-1)" class="vit-slider__btn vit-slider__btn--prev">',
		'<i class="material-icons vit-slider__icon">arrow_back</i>',
		'</div>',
		'<div hm-tap="$ctrl.changeContent(1)" class="vit-slider__btn vit-slider__btn--next">',
		'<i class="material-icons vit-slider__icon">arrow_forward</i>',
		'</div>',
		'</div>',
		'</div>',
	].join('');

	angular.
		module('vit.components')
		.component('vitSlider', {
			bindings: {
				delay: '<',
				attrSelector: '<',
			},
			transclude: true,
			template: template,
			controller: ['$element', '$interval', '$timeout', controller],
		});



	function controller($element, $interval, $timeout) {
		var vm = this;

		var host = $element.find('.vit-slider');
		var delay = vm.delay || 1000;
		var timer = {
			name: [],
		};

		vm.changeContent = changeContent;

		activate();

		function activate() {
			overflowXHidden();

			$timeout(function() {
				hideAllUnlessFirst();
			}, 0);
			
			timer.name.push(startInterval(delay));
		}

		function startInterval(delay) {	
			return $interval(function() {
						changeContent(1);
					}, delay);
		}

		function changeContent(count) {
			var items = host.find('[' + vm.attrSelector + ']');

			for(var i = 0, len = timer.name.length; i < len; i++) {
				$interval.cancel(timer.name[i]);
				timer.name[i] = startInterval(delay);	
			}

			for (var i = 0; i < items.length; i++) {
				if (!angular.element(items[i]).hasClass('js-display-hide')) {
					angular.element(items[i]).addClass('js-display-hide');

					if (count > 0) {
						if (items[i + 1]) {
							if (angular.element(items[i + 1]).hasClass('js-slide-left')) {
								angular.element(items[i + 1])
									.removeClass('js-display-hide')
									.removeClass('js-slide-left')
									.addClass('js-slide-right');
							} else {
								angular.element(items[i + 1])
									.removeClass('js-display-hide')
									.addClass('js-slide-right');
							}
							break;
						} else {
							if (angular.element(items[0]).hasClass('js-slide-left')) {
								angular.element(items[0])
									.removeClass('js-display-hide')
									.removeClass('js-slide-left')
									.addClass('js-slide-right');
							} else {
								angular.element(items[0])
									.removeClass('js-display-hide')
									.addClass('js-slide-right');
							}
							break;
						}
					} else {
						if (items[i - 1]) {
							if (angular.element(items[i - 1]).hasClass('js-slide-right')) {
								angular.element(items[i - 1])
									.removeClass('js-display-hide')
									.removeClass('js-slide-right')
									.addClass('js-slide-left');
							} else {
								angular.element(items[i - 1])
									.removeClass('js-display-hide')
									.addClass('js-slide-left');
							}
							break;
						} else {
							if (angular.element(items[items.length - 1]).hasClass('js-slide-right')) {
								angular.element(items[items.length - 1])
									.removeClass('js-display-hide')
									.removeClass('js-slide-right')
									.addClass('js-slide-left');
							} else {
								angular.element(items[items.length - 1])
									.removeClass('js-display-hide')
									.addClass('js-slide-left');
							}
							break;
						}
					}
				}
			}
		}

		function hideAllUnlessFirst() {
			var items = host.find('[' + vm.attrSelector + ']');

			for (var i = 1, len = items.length; i < len; i++) {
				if (!angular.element(items[i]).hasClass('js-display-hide')) {
					angular.element(items[i]).addClass('js-display-hide');
				}
			}
		}

		function overflowXHidden() {
			angular.element('body').css('overflow-x', 'hidden');
		}
	}
})();
