

$( function() {
	//confituration
	var width =720;
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 1;

	//cache DOM
	var $slider = $('#slide-show');
	var $sliderContainer = $slider.find('.slides');
	var $slides = $sliderContainer.find('.slide');

	var interval;

	function startSlider() {
		interval = setInterval(function() {
		$sliderContainer.animate({'margin-left':'-='+width}, animationSpeed, function(){
		currentSlide++;
		if (currentSlide === $slides.length) {
		currentSlide = 1;
		$sliderContainer.css('margin-left',0);
		}
	});
	},pause);
}


	function stopSlider(){
		clearInterval(interval);
	}

	$slider.on('mouseenter', stopSlider).on('mouseleave',startSlider);

	startSlider();


});
