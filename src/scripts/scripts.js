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
			for(var index = 0, len = this._links.length; index < len; index++ ) {
				(function(index){
					self._links[index].addEventListener('click', function(e) {
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


;(function(global, document) {
	'use strict';

	document.addEventListener('DOMContentLoaded', function() {
		global.pageItemsNav.init();
	});

})(window, document);