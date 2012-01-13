$(function() {
	var quad = "<div class='quad'></div>";
	var maxDivs = 15;
	for(var i = 0; i<maxDivs; i++) {
		$('#container').append(quad);
	}
	
	$('#fade-out').on('click', function() {
		$('#container').children('.quad').animateCSS('fadeOutRear', {duration:250, delay:0, eachElement: {addDuration:0, addDelay:50, randomizeDuration:0, randomizeDelay:0}, autoHide:true });
	});
	
	$('#fade-in').on('click', function() {
		$('#container').children('.quad').animateCSS('fadeInLeft', {duration:500, delay:0, eachElement: {addDuration:30, addDelay:20, randomizeDuration:0, randomizeDelay:0}, autoHide:false });
	});
	
	$('#wobble').on('click', function() {
		$('#container').children('.quad').css("opacity",1).animateCSS('wobble', {duration:600, delay:0, eachElement: {addDuration:100, addDelay:150, randomizeDuration:0.8, randomizeDelay:0.4}, autoHide:false });
	});

});