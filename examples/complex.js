$(function() {

	var quad = "<div class='quad'></div>",
		maxDivs = 15,
		$controls = $("#controls"),
		$container = $("#container");
	
	for(var i = 0; i<maxDivs; i++) {
		$container.append(quad);
	}
	
	var optionsFadeOut = { 
		duration:300, 
		delay:0, 
		eachElement: {addDuration:0, addDelay:50, randomizeDuration:0.5, randomizeDelay:0}, 
		autoHide:true 
	};
	
	var optionsFadeIn = {
		duration:300,
		delay:0, 
		eachElement: {addDuration:300, addDelay:0, randomizeDuration:0.8, randomizeDelay:0.4}, 
		autoHide:false
	};

	$controls.on('click', '#fade-out', function() {
		$container.children('.quad').animateCSS('fadeOutRear', optionsFadeOut);
	});
	
	$controls.on('click', '#fade-in', function() {
		$container.children('.quad').animateCSS('fadeInFront', optionsFadeIn);
	});
	
	
	$controls.on('change', '#fade-in-duration', function() {
		optionsFadeIn.duration = $(this).val();
	}).on('change', '#fade-out-duration', function() {
		optionsFadeOut.duration = $(this).val();
	});
	
});