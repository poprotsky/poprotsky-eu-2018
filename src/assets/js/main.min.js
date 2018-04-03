$(document).ready(function(){


	if($.fn.validate) {
		$.validator.setDefaults({
			highlight: function(element, errorClass, validClass) {
				var $element = $(element);
				$element.addClass(errorClass).removeClass(validClass);
				if ($element.attr('type') == 'checkbox' || $element.attr('type') == 'radio') {
					if ($element.attr('type') == 'checkbox') {
						$element.closest('.checkbox').addClass('error-checkbox');
					} else if ($element.attr('type') == 'radio') {
						$element.closest('.radio').addClass('error-radio');
					}
				} else if ($element.prop("tagName") == 'SELECT') {
					$element.closest('.custom-select, .custom-select2, .custom-select2-multiple').addClass('select-error');
				}
			},
			unhighlight: function(element, errorClass, validClass) {
				var $element = $(element);
				$element.removeClass(errorClass).addClass(validClass);
				if ($element.attr('type') == 'checkbox' || $element.attr('type') == 'radio') {
					if ($element.attr('type') == 'checkbox') {
						$element.closest('.checkbox').removeClass('error-checkbox');
					} else if ($element.attr('type') == 'radio') {
						$element.closest('.radio').removeClass('error-radio');
					}
				} else if ($element.prop("tagName") == 'SELECT') {
					$element.closest('.custom-select, .custom-select2, .custom-select2-multiple').removeClass('select-error');
				}
			},
			errorPlacement: function() {
			},
			ignore: ':hidden:not([type="hidden"]):not(select)'
		});

		$('form.validate').each(function() {
			$(this).validate();
		});
	}

    if($.fn.owlCarousel) {
        $('.carousel').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            stagePadding: 0,
            smartSpeed: 500,
            fluidSpeed: 500,
            navSpeed: 500,
            navText: ['<i class="ico ico-arrow-left"></i>','<i class="ico ico-arrow-right"></i>'],
            responsiveClass: true
        });
    }

	$('.js-nav-trigger').on('click', function(){
		$('html').toggleClass('is-nav-open');
	});
});

$(window).on('load', function(){

});
