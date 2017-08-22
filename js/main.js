(function($, undefined){
	$(".dropdown-list").each(function () {
		if(!($(this).hasClass('open'))){
			$(this).addClass('closed');
		}else{
			$(this).removeClass('open');
		};

		$(this).first().on('click', function () {
			$(this).toggleClass('closed');
		});
	});

	$("#page-header button").on('click', function () {
		var textSize = $("html").attr("data-text-size");
		var textSizeClass = "text-size-" + textSize;
		var newTextSizeClass = textSizeClass;
		if($(this).hasClass('decrease-font-size') && (textSize > 1)){
			$("#page-header .increase-font-size").removeClass("disabled");
			newTextSizeClass = "text-size-" + (textSize - 1);
			$("html").removeClass(textSizeClass).addClass(newTextSizeClass);
			$("html").attr("data-text-size", (textSize - 1))
			if(textSize < 3) {
				$(this).addClass("disabled");
			}
		}else{
			if($(this).hasClass('increase-font-size') && (textSize < 5)){
				$("#page-header .decrease-font-size").removeClass("disabled");
				newTextSizeClass = "text-size-" + (textSize *1 + 1);
				$("html").removeClass(textSizeClass).addClass(newTextSizeClass);
				$("html").attr("data-text-size", (textSize *1 + 1))
				if(textSize > 3) {
					$(this).addClass("disabled");
				}
			}
		}
	});

	$(function() {
		$('a[rel="external"]').on('click', function(e) {
			window.open( $(this).attr('href') );
			e.preventDefault();
			return false;
		});
	});

})(jQuery);

function setupPlaceholders() {
	function setHandlers(elem, placeholder) {
		$(elem).focus(function() {
			$(elem).attr('placeholder', '');
			$(elem).removeClass('placeholder');
		});
		$(elem).blur(function() {
			$(elem).attr('placeholder', placeholder);
			if ($(elem).val() === undefined || $(elem).val() === null || $(elem).val() === '') {
				$(elem).addClass('placeholder');
			}
		});
	}

	$('.placeholder').each(function(index, elem) {
		var ph = $(elem).attr('placeholder');
		if (ph === undefined) {
			if ($(elem).attr('data-i18n').indexOf('[placeholder]') > -1) {
				// localisation was not done yet. poll for value
				var tries = 0;

				var interval = setInterval(function() {
					if (ph === undefined && tries < 5) {
						tries++;
						ph = $(elem).attr('placeholder');

						if (ph !== undefined) {
							clearInterval(interval);
							setHandlers(elem, ph);
						}
					} else {
						clearInterval(interval);
						ph = ph || ' ';
						setHandlers(elem, ph);
					}
				}, 1000);

			}
		} else {
			setHandlers(elem, ph);
		}
	});
}
