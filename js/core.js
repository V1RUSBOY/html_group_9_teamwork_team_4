$(document).ready(function() {
	$('.carousel').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: 'linear'
	});
});
$(document).ready(function() {
	$('.sliders').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: 'linear'
	});
});
$('#menu-btn').click(function(){		
	$('.nav').slideToggle(700);	
	if ($(this).hasClass('not-active')) {
		$(this).addClass('is-active').removeClass('not-active');
	}else{
		setTimeout(function(){
			$('.is-active').addClass('not-active').removeClass('is-active')
		},600)			
	}		
});
$('#our-works').click(function(){		
	$('.nav').slideToggle(700);	
	if ($(this).hasClass('not-active')) {
		$(this).addClass('is-active').removeClass('not-active');
	}else{
		setTimeout(function(){
			$('.is-active').addClass('not-active').removeClass('is-active')
		},600)			
	}		
});
$('#contact-us').click(function(){		
	$('.nav').slideToggle(700);	
	if ($(this).hasClass('not-active')) {
		$(this).addClass('is-active').removeClass('not-active');
	}else{
		setTimeout(function(){
			$('.is-active').addClass('not-active').removeClass('is-active')
		},600)			
	}		
});



$(document).ready(function() {
	var open_modal = $('.open_modal');
	var overlay = $('.overlay');
	var modal = $('.modal');
	var close = $('.close, .overlay');
	open_modal.click(function(event){    
		event.preventDefault();
		var current_modal = $(this).attr('href');
		$(current_modal).fadeIn(1000);
		overlay.toggle(500);
	});
	close.click(function(){
		modal.fadeOut(400);
		overlay.toggle(700);
	});
});
