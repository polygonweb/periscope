;(function(global, document) {
	'use strict';

	var pageItemsNav = {
		init: function() {
			this._nav = document.querySelector('.page-nav');
			this._links = Array.prototype.slice.call(document.querySelectorAll('.page-nav__link'));
			this._items = Array.prototype.slice.call(document.querySelectorAll('.sections__item'));
			this.bindEvents();
		},

		bindEvents: function() {
			var self = this;
			var eventType = ('ontouchstart' in window) ? 'touchstart' : 'click';
			// alert(eventType);
			for(var index = 0, len = this._links.length; index < len; index++ ) {
				(function(index){
					self._links[index].addEventListener(eventType, function(e) {
						e.preventDefault();
						self.setActive(index);
					});
				})(index);
			}
		},

		setActive: function(index) {
			for(var i = 0, len = this._links.length; i < len; i++ ) {
				if (index === i) {
					this._links[i].classList.add('page-nav__link_active');
					this._items[i].classList.add('sections__item_active');
				} else {
					this._links[i].classList.remove('page-nav__link_active')
					this._items[i].classList.remove('sections__item_active')
				}
			}
		}
	};

	global.pageItemsNav = pageItemsNav;

})(window, document);


;(function(global, document, $) {
	'use strict';

	var btn = document.getElementById('cta-btn');
	var eventType = ('ontouchstart' in window) ? 'touchstart' : 'click';
	btn.addEventListener(eventType, function(e) {
		e.preventDefault();
		var formSection = document.querySelector('.sections__item_active .form-section');
		if (!formSection) return;

		$('html, body').animate({
			scrollTop: $(formSection).offset().top
		}, 700)
	})
})(window, document, window.jQuery || window.Zepto);


// ;(function(global, document, $) {
// 	'use strict';

// 	$('.requset-form').submit(function(e){

// 			e.preventDefault();

// 			var $this = $(this);
// 			var $formWrapper = $this.closest('.form-wrapper');
// 			var pathToAjax = $(this).attr('action');

// 			$.ajax({
// 				type: "POST",
// 				url: pathToAjax,
// 				data: {
// 					'client-name': $this.find('[name="client-name"]').val(),
// 					'client-name': $this.find('[name="client-tel"]').val(),
// 				}
// 			}).done(function(response) {
// 				if ( response == 1 ) {
// 					// "Письмо отправлено";
// 					$formWrapper.addClass('form-sended');
// 					setTimeout(function() {
// 						$formWrapper.removeClass('form-sended');
// 						// $this.reset();
// 					}, 5000);
// 				} else {
// 					alert(response)
// 				};
// 			});

// 			return false;
// 		});
// })(window, document, window.jQuery || window.Zepto);


;(function(global, document) {
	'use strict';

	document.addEventListener('DOMContentLoaded', function() {
		global.pageItemsNav.init();
	});

})(window, document);