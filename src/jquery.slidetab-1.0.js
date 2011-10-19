(function($) {
	$.fn.jProductMenuBox = function(o) {
		o = $.extend({
			effect : "linear",
			speed : 500,
			hovered : "hovered", 
			selected : "selected", 
			slidebox : "slideBox", 
			btnGo : null,
			content : null,
			start : 0,
			scroll : 1,
			click : function() {
			} 
		}, o || {});

		return this.each(function() {
			var target = $(this), 
				$li = $("li", this), 
				sb = $('<li class="' + o.slidebox + '"><div class="' + o.slidebox + '-inner"><div class="ver"></div></div></li>').appendTo(target), 
				$a = $("a", this), 
				seld = $("li." + o.selected, this)[0] || $li.eq(0).addClass(o.selected)[0], 
				running = false, 
				div = $(o.content), 
				ul = div.children("ul").eq(0), 
				$cli = ul.children("li"), 
				itemLength = $cli.size(), 
				curr = o.start;

			$(document).keydown(function(e) {
				switch (e.keyCode) {
					case 37:
						$($(seld).prev()[0]).click();
						break;
					case 39:
						$($(seld).next('li[class!="' + o.slidebox + '"]')[0]).click();
						break;
				}
			});

			$li.not("." + o.slidebox).click(function() {
				move(this);
			});
			
			$li.hover(function() {
				$(this).addClass(o.hovered);
			}, function() {
				$(this).removeClass(o.hovered);
			});
			
			$li.click(function(e) {
				if (this != seld) {
					setSelected(this);
					return o.click.apply(this, [ e, this ]);
				}
				return o.click.apply(this, [ e, null ]);
			});
		
			setSelected(seld);
			sb.css({"width" : seld.offsetWidth + "px","left" : seld.offsetLeft + "px"});	
			
		
			$cli.css({margin : "0",padding : "0",overflow : "hidden","float" : "left"});		
			div.css({left : "0px",height : $cli[curr].offsetHeight});						
			var liSize = width($cli),		
			ulSize = liSize * itemLength,	
			divSize = liSize; 					
			$cli.css({width : $cli.width()});
			ul.css("width", ulSize + "px").css("left", -(curr * liSize));
			div.css("visibility", "visible"); 
			div.css("width", divSize + "px");
			
			$.each($(o.btnGo), function(i, val) {
				$(val).click(function() {
					return go(i);
				});
			});
			function setSelected(el) {
				$(seld).removeClass(o.selected);
				seld = el;
				$(el).addClass(o.selected);
			}
			
			function move(el) {
				sb.stop(false, false).animate({
					width : el.offsetWidth,
					left : el.offsetLeft
				}, o.speed, o.effect);
			}
			function go(to) {
				div.css({
					height : $cli[to].offsetHeight
				});
				if (to < 0 || to > itemLength - 1)
					return;
				else
					curr = to;

				running = true;

				ul.stop(false, false).animate({
					left : -(curr * liSize)
				}, o.speed, o.effect, function() {
					running = false;
				});
				return false;
			}
			;
			
		});
		function css(el, prop) {
			return parseInt($.css(el[0], prop)) || 0;
		}
		function width(el) {
			return el[0].offsetWidth + css(el, 'marginLeft') + css(el, 'marginRight');
		}
		function height(el) {
			return el[0].offsetHeight + css(el, 'marginTop') + css(el, 'marginBottom');
		}
	};
	
})(jQuery);