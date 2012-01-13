#jquery.AnimateCSS
*Jquery plugin for animate.css*

A little plugin that makes animation of mulitple objects a lot easier and utilizes the power of the great animate.css (http://daneden.me/animate/).

##Usage
Get [jQuery](http://jquery.com/) and [Animate.css](http://daneden.me/animate/) them in your page.


	<link rel="stylesheet" href="animate.css" type="text/css" />
	<script src="jquery.min.js"></script>
	<script src="fn.animate-css.js"></script>	


Use the animateCSS method to apply classes to one or multiple objects. 

	$('.element').animateCSS('fadeInLeft', {duration:300, delay:0, easing:"linear" autoHide:false, swarm: { time:100, random:false, kind:'duration'}, autoHide:false });


##Resources and Helpers
You can use the great [ceaser](http://matthewlein.com/ceaser/) to create easings that you can use for the easing option.



