/*
jquery.animateCSS - http://intuity.de

Authors: Marcel Müller, Matthias Wagler

LICENSED UNDER THE  MIT LICENSE (MIT)

Copyright (c) 2011 Intuity

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

$.fn.extend({ 
	animateCSS: function(classes, options) {
	
		var settings = {
			duration : 500,
			delay : 0,
			swarm : { delay:0, random:false, kind:'delay' },
			autoHide: false,
			random: false,
			onComplete: null
		};
		
		
		return this.each(function(index) {
		  
			if (options)  $.extend( settings, options );
			var obj = $(this),
				duration = settings.duration,
				delay = settings.delay,
				oldTimeouts = obj.data("animationTimeout"),
				onComplete = settings.onComplete;
			
			if(settings.swarm.time > 0) {
				var multi = index;
				
				if(settings.swarm.random) multi = Math.random().toFixed(1);
				
				if(settings.swarm.kind == 'delay') {
					console.log('delay');
					delay = settings.delay+settings.swarm.time*multi;
				} else if(settings.swarm.kind == 'duration') {
					console.log('duration');
					duration = settings.duration+settings.swarm.time*multi;
					console.log
				}
			}
			
			if (oldTimeouts!=null) {
				window.clearTimeout(oldTimeouts);
			}
	
			obj.show().css({
				"-ms-animation-duration": duration+"ms",
				"-webkit-animation-duration": duration+"ms",
				"-moz-animation-duration": duration+"ms",
				"animation-duration": duration+"ms",
				"-ms-animation-delay": delay+"ms",
				"-webkit-animation-delay": delay+"ms",
				"-moz-animation-delay": delay+"ms",
				"animation-delay": delay+"ms",

			}).addClass("animated " + classes);

			var timeout = setTimeout(function() {
				obj.removeClass("animated " + classes);
				if (settings.autoHide) {
					obj.css('opacity', '0');
				} else {
					obj.css('opacity', '1');
				}
				obj.data("animationTimeout", null);
				if (settings.onComplete) settings.onComplete(index, obj);
				
			}, (duration + delay)+150); // +150 because of buggy behaviour in WebKit and Gecko
			
			obj.data("animationTimeout", timeout);

		});
	}
 });
 