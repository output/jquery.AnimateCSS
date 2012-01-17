#jquery.AnimateCSS
*Jquery plugin for animate.css*

A little plugin that makes animation of mulitple objects a lot easier and utilizes the power of the wonderful [Animate.css](http://daneden.me/animate/).

##Usage
Get [jQuery](http://jquery.com/) and [Animate.css](http://daneden.me/animate/) them in your page.


	<link rel="stylesheet" href="animate.css" type="text/css" />
	<script src="jquery.min.js"></script>
	<script src="fn.animate-css.js"></script>	


Use the animateCSS method to apply classes to one or multiple objects. 

	$('.element').animateCSS('fadeInLeft', {duration:300, delay:0, easing:"linear" autoHide:false, swarm: { time:100, random:false, kind:'duration'}, autoHide:false });


##Options

###duration (Number, default = 500)
Duration of the animation

###delay (Number, default = 0)
Delay of the animation

###easing(String, default = "cubic-bezier(0.785, 0.135, 0.150, 0.860)")
CSS easing that should be applied to the animated object. You can use the great [ceaser](http://matthewlein.com/ceaser/) to create easings that you can use for the easing option.

###eachElement (Object, default = { addDuration:0, addDelay:0, randomizeDuration:0, randomizeDelay:0 })
Add duration and delay to each element in order to create swarm like animations.

###autoHide(Boolean, default = false)
Hide the element after the animation.

###onComplete(Function)
Callback function that gets executed when the animation is completed


##Read about it…
on our [blog](http://www.intuity.de/ux-lab-the-illusion-of-life-how-vivid-animation-can-uplift-digital-experiences).




