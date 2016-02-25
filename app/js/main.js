window.onload = function() {

	// MAIN MENU
	$(function() {
		$('.projects').hover(
			function(){
				$('.sous-menu').stop().slideDown(500);
			},
			function(){
				$('.sous-menu').stop().slideUp(500);
			});
	});

	$(function() {
		var topBar = $('.top-bar');

		topBar.sticky({topSpacing:0});

		topBar.on('sticky-start', function() {
			$(this).animate({
				'height':'50px'
			});
			$('.item-menu').animate({
				'line-height':'45px'
			});
			$('.logo').animate({
				'height':'40px'
			});
		});

		topBar.on('sticky-end', function() {
			$(this).animate({
				'height':'75px'
			});
			$('.item-menu').animate({
				'line-height':'70px'
			});
			$('.logo').animate({
				'height':'60px'
			});
		});
	});
};
