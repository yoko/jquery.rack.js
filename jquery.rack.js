/*
 * jquery.rack.js <http://github.com/yoko/jquery.rack.js/tree/master>
 *
 * (c) 2008- yksk <http://carbonfairy.org/>
 * Released under the MIT license <http://www.opensource.org/licenses/mit-license.php>
 */
(function($) {
	$.fn.rack = function(size) {
		var self = this;
		size = size || {
			width : this.width(),
			height: this.height()
		};
		var li = $('li', this);

		var items = [];
		var a, img;

		var i = li.length;
		var w = size.width / i;
		while (i--) {
			var current = li.eq(i);
			a   = $('a', current).get(0);
			img = $('img', current).get(0);

			items.unshift({
				href: a.href,
				src : img.src
			});
			if (i > 0) current.remove();
		}

		return this
			.css({
				overflow     : 'hidden',
				width        : size.width,
				height       : size.height,
				textAlign    : 'center',
				verticalAlign: 'middle'
			})
			.mousemove(function(e, data) {
				var self = $(this);

				var offset = self.offset({ scroll: false });
				var x = (data || e).pageX - offset.left;
				var i = Math.floor(x / w);

				if (i == self.data('index')) return;
				self.data('index', i);

				var item = items[i];
				a.href = item.href;
				img.src = item.src;
			});
	};
})(jQuery);
