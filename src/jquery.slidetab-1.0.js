(function($) {
	$.fn.slideTab = function(o) {
		var primaryClass = "slideTabs";
		o = $.extend({
			class_main : primaryClass,
			class_menu : primaryClass + "-menu",  
			class_contents : primaryClass + "-contents",  
			class_content : primaryClass + "-content", 
			class_selected : primaryClass + "-selected",
			class_hovered : primaryClass + "-hovered",
			class_slideBox : primaryClass + "-slideBox",
			class_slideBox_inner : primaryClass + "-slideBox-inner",
			class_edge : primaryClass + "-edge",
			defaultHeight : 40,
			effect : "linear",
			speed : 500,			
			content : null,
			start : 0,
			scroll : 1,
			click : function() {
			} 
		}, o || {});

		return this.each(function() {//$ initial variables means jQuery object	
				//Menu
			var $m_target = $(this).addClass(o.class_main),
				$m_ul = $("ul:first",this).addClass(o.class_menu), 
				$m_li = $("li", $m_ul), 				
			
				//Content
				$c_div = $(o.content == null ? $("> div:first", this) : $(o.content)).addClass(o.class_contents), 
				$c_ul = $("ul:first",$c_div), 
				$c_li = $("li",$c_ul).addClass(o.class_content),				
				$sb = $('<li class="' + o.class_slideBox + '"><div class="' + o.class_slideBox_inner + '"><div class="ver"></div></div></li>').appendTo($m_ul), 				
				
				//Globals
				seld = $m_li.eq(o.start).addClass(o.class_selected)[0], 
				totalWidth = $m_target[0].offsetWidth,
				itemLength = $c_li.size(), 
				running = false, 
				currentIndex = o.start;	
						

			$m_ul.prepend('<div class="' + o.class_edge + ' ' + o.class_edge + '-begin"></div>');
			$m_ul.append('<div class="' + o.class_edge + ' ' + o.class_edge + '-end"></div>');			
			$m_ul.css({ height : o.defaultHeight });
			$m_li.each(function() {
				var temp = $(this).children().detach();
					m_div = $('<div class="list"><i></i></div>').append(temp).appendTo($(this));
					m_div.width((totalWidth - $('.' + o.class_edge).width() * 2 )/ $m_li.length );
					m_div.children("a").attr("href","#");
					$(this).css({ height : o.defaultHeight });
					m_div.css({ height : o.defaultHeight });
			});
			$sb.css({width : seld.offsetWidth, height : o.defaultHeight, left : seld.offsetLeft});	
			$c_div.css({width : totalWidth});
			$c_li.css({width : totalWidth});		
			$c_ul.css({left : 0, height : $c_li[currentIndex].offsetHeight});
			$c_ul.css("width", itemLength * totalWidth).css("left", -(currentIndex * totalWidth));
			
			setSelected(seld);
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
			
			//Click function hack - handle selected
			$m_li.click(function(e) {
				if (this != seld) {
					setSelected(this);
					return o.click.apply(this, [ e, this ]);
				}
				return o.click.apply(this, [ e, null ]);
			});
			
			//Menu items' click handle
			$.each($m_li, function(i, val) {
				$(val).click(function() {
					menuSlide(this);
					return contentSlide(i);
				});
			});
			
			function setSelected(el) {
				$(seld).removeClass(o.class_selected);
				seld = el;
				$(el).addClass(o.class_selected);
			}
			
			function menuSlide(el) {
				$sb.stop(false, false).animate({
					width : el.offsetWidth,
					left : el.offsetLeft
				}, o.speed, o.effect);
			}
			
			function contentSlide(index) {
				$c_div.css({
					height : $c_li[index].offsetHeight
				});
				if (index < 0 || index > itemLength - 1)
					return;
				else
					currentIndex = index;

				running = true;

				$c_ul.stop(false, false).animate({
					left : -(currentIndex * totalWidth)
				}, o.speed, o.effect, function() {
					running = false;
				});
				return false;
			};
		});
	};
	
})(jQuery);