
(function($) {
	$.fn.rack = function(size) {
		size = size || [this.width(), this.height()];
		$(this).css({
			overflow     : 'hidden',
			width        : size[0],
			height       : size[1],
			textAlign    : 'center',
			verticalAlign: 'middle'
		});

		var d = size[0] / $('img', this).length;
		var images = [];
		var a, img;
		$('li', this).each(function(i) {
			var _a = $('a', this);
			var _img = $('img', this);
			images.push({
				src : _img.attr('src'),
				href: _a.attr('href')
			});
			if (!i) {
				a = _a;
				img = _img;
			}
			else $(this).remove();
		});

		this.bind('mousemove', function(e) {
			var offset = $(this).offset({ scroll: false });
			var x = e.pageX - offset.left;
			var image = images[parseInt(x / d)];
			if (image) {
				a.attr('href', image.href);
				img.attr('src', image.src);
			}
		});
	};
})(jQuery);
