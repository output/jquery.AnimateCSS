$(function() {
	var quad = "<div class='quad'></div>";
	var maxDivs = 15;
	for(var i = 0; i<maxDivs; i++) {
		$('body').append(quad);
	}
	$('#fade-out').on('click', function() {
		$('body').children('.quad').animateCSS('fadeOutRear', {duration:300, delay:0, autoHide:false, swarm: { time:200, random:true, kind:'delay'}, autoHide:true });
	});
	$('#fade-in').on('click', function() {
		$('body').children('.quad').animateCSS('fadeInLeft', {duration:300, delay:0, autoHide:false, swarm: { time:100, random:false, kind:'duration'}, autoHide:false });
	});
});