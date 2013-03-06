/*!
 * jQuery Poll plugin
 * Examples and documentation at: http://www.icastwork.com
 * Copyright (c) 2013 Isaac Castillo
 * Version: 1.0 (28-FEB-2013)
 * Dual licensed under the MIT and GPL licenses.
 * http://www.icastwork.com/slidedrawer/license
 * Requires: jQuery v1.7.1 or later
*/

;(function($) {
	
	var defaults = {
		var1: 'here',
		var2: 'here',
	}
	
	$.fn.slideDrawer = function(options) {
		
		var config = $.extend({}, defaults, options);
		
		
		
		// Slide drawer ---------------------------//
			var slideEvents = {
		
				container: $('#events'),
		
				config: {
					fullHeight: 137,
					hiddenHeight: 28
				},
		
				toggle: function() {
					// check height then call function
					var div = slideEvents.container,
						divHeight = div.height(),
						fullHeight = slideEvents.config.fullHeight,
						hiddenHeight = slideEvents.config.hiddenHeight;
						
					(divHeight === fullHeight) ? slideEvents.slide( div, hiddenHeight ): slideEvents.slide( div, fullHeight );
			
				},
		
				slide: function( div, height, speed ) {
					div.animate({
						'height': height
					}, speed || 300 );
				},
		
			};
	
			setTimeout(function() {
				slideEvents.slide( $('#events'), slideEvents.config.hiddenHeight, 1000 );
			}, 5000);
	
			$('#clickme').on('click', slideEvents.toggle);
		
		
		
		
		
		
		
		
		return this;
		
	}
	
}(jQuery));
	  
	  