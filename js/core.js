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
$('#our_works').click(function(){		
	$('.nav').slideToggle(700);	
	if ($(this).hasClass('not-active')) {
		$(this).addClass('is-active').removeClass('not-active');
	}else{
		setTimeout(function(){
			$('.is-active').addClass('not-active').removeClass('is-active')
		},600)			
	}		
});