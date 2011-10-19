(function($) {
	$.fn.slideTab = function(o) {
		o = $.extend({
			class_main : "slideTabs",
			class_selected : "selected",  
			class_hovered : "hovered",
			effect : "linear",
			speed : 500,			
			content : null,
			start : 0,
			scroll : 1,
			click : function() {
			} 
		}, o || {});

		return this.each(function() {
			//$ means jQuery object	
			//Menu 
			var $m_target = $(this).addClass(o.class_main),
				$m_ul = $("ul:first",this).addClass(o.class_main + "-menu"), 
				$m_li = $("li", $m_ul), 				
			
				//Content
				$c_div = $(o.content == null ? $("> div:first", this) : $(o.content)).addClass(o.class_main + "-contents"), 
				$c_ul = $("ul:first",$c_div), 
				$c_li = $("li",$c_ul).addClass(o.class_main + "-content"),
				
				sb = $('<li class="' + o.class_main + '-slideBox"><div class="' + o.class_main + '-slideBox-inner"><div class="ver"></div></div></li>').appendTo($m_ul), 
				seld = $m_li.eq(o.start).addClass(o.class_selected)[0], 
				totalWidth = $m_target[0].offsetWidth,
				itemLength = $c_li.size(), 
				running = false, 
				currentIndex = o.start;	
						
			$m_ul.prepend('<div class="' + o.class_main + '-edge-begin"></div>');
			$m_ul.append('<div class="' + o.class_main + '-edge-end"></div>');			
			$m_li.each(function() {
				var temp = $(this).children().detach();
					m_div = $('<div class="list"><i></i></div>').append(temp).appendTo($(this));
					m_div.width((totalWidth - $('.' + o.class_main + '-edge-end').width() * 2 )/ $m_li.length );
					m_div.children("a").attr("href","#");
			});
			
			//Menu items' key LEFT and RIGHT 
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
			
			
			
			//Menu items' mouse over 
			$m_li.hover(function() {
				$(this).addClass(o.class_hovered);
			}, function() {
				$(this).removeClass(o.class_hovered);
			});
			//Menu items' click slide handle
			$m_li.not("." + o.slidebox).click(function() {
				move(this);
			});
			$m_li.click(function(e) {
				if (this != seld) {
					setSelected(this);
					return o.click.apply(this, [ e, this ]);
				}
				return o.click.apply(this, [ e, null ]);
			});
		
			setSelected(seld);
			sb.css({"width" : seld.offsetWidth + "px","left" : seld.offsetLeft + "px"});	
			
		
			$c_li.css({margin : "0",padding : "0",overflow : "hidden","float" : "left"});		
			$c_ul.css({left : "0px",height : $c_li[currentIndex].offsetHeight});						
			var liSize = width($c_li);
			
					
			$c_li.css({width : totalWidth});
			$c_ul.css("width", itemLength * totalWidth).css("left", -(currentIndex * totalWidth));
			$c_div.css({width : totalWidth, visibility : "visible"});
			
		
			
			$.each($m_li, function(i, val) {
				$(val).click(function() {
					return go(i);
				});
			});
			function setSelected(el) {
				$(seld).removeClass(o.class_selected);
				seld = el;
				$(el).addClass(o.class_selected);
			}
			
			function move(el) {
				sb.stop(false, false).animate({
					width : el.offsetWidth,
					left : el.offsetLeft
				}, o.speed, o.effect);
			}
			function go(to) {
				$c_div.css({
					height : $c_li[to].offsetHeight
				});
				if (to < 0 || to > itemLength - 1)
					return;
				else
					currentIndex = to;

				running = true;

				$c_ul.stop(false, false).animate({
					left : -(currentIndex * totalWidth)
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