$(function() {
	var quad = "<div class='quad'></div>";
	var maxDivs = 15;
	for(var i = 0; i<maxDivs; i++) {
		$('body').append(quad);
	}
	$('#fade-out').on('click', function() {
		$('body').children('.quad').animateCSS('fadeOutRear', {duration:300, delay:0, eachElement: {addDuration:0, addDelay:50, randomizeDuration:0.5, randomizeDelay:0}, autoHide:true });
	});
	$('#fade-in').on('click', function() {
		$('body').children('.quad').animateCSS('fadeInFront', {duration:300, delay:0, eachElement: {addDuration:300, addDelay:0, randomizeDuration:0.8, randomizeDelay:0.4}, autoHide:false });
	});
});