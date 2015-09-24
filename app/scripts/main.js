
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
		$('.item-logo').hover(
			function(){
				$(this).stop().animate({ "bottom": "10px" }, 200);
			},
			function(){
				$(this).stop().animate({ "bottom": "0px" }, 200);
			}
		);
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
			})
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
			})
			$('.logo').animate({
				'height':'60px'
			});
		});
	});

	$(function() {
		$('#tagsphere').tagSphere({
			height: 300,
			width: 300,
			slower: 0.99,	
			radius: 75,
			speed: 0.2,
			timer: 50
		});
	});
}