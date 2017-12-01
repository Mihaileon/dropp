(function ($) {
	$ (function(){
		$('.menu__humburger').on('click',function(){			
			$(this).closest('.menu').toggleClass('menu_active');
		});
		$('.menu__link').on('click',function(){			
			$(this).closest('.menu').toggleClass('menu_active');
		});			
	});	
})(jQuery);	