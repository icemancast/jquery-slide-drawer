/*!
 * jQuery Slide Drawer
 * Examples and documentation at: http://www.icastwork.com
 * Copyright (c) 2013 Isaac Castillo
 * Version: 1.0 (28-FEB-2013)
 * Dual licensed under the MIT and GPL licenses.
 * http://www.icastwork.com/slidedrawer/license
 * Requires: jQuery v1.7.1 or later
*/

;(function ($) {
	
	var drawer = {
		
		init: function ( options, div ) {
			
			// Set 			
			if(options.showDrawer == true && options.slideTimeout == true)
			{
				setTimeout(function() {
					drawer.slide(div, options.drawerHiddenHeight, options.slideSpeed);
				}, options.slideTimeoutCount);
			} 
			else if(options.showDrawer == false)
			{
				// Set drawer hidden on load
				drawer.slide(div, options.drawerHiddenHeight, options.slideSpeed);
			}
			
			// Toggle drawer when clicked
			$('.clickme').on('click', function(){
				drawer.toggle(options, div);
			});
			
		},
		
		//Toggle function
		toggle: function(options, div) {
			($(div).height()+options.borderHeight === options.drawerHeight) ? drawer.slide( div, options.drawerHiddenHeight, options.slideSpeed ) : drawer.slide( div, options.drawerHeight-options.borderHeight, options.slideSpeed );
		},
		
		// Slide animation function
		slide: function( div, height, speed ) {
			$(div).animate({
				'height': height
			}, speed );
		}
	};

	// Function wrapper
    $.fn.slideDrawer = function ( options ) {
		
		var drawerContent = this.children('.drawer-content'), /* Content height of drawer */
			borderHeight = parseInt(drawerContent.css('border-top-width')); /* Border height of content */
		
		drawerHeight = this.height() + borderHeight; /* Total drawer height + border height */
		drawerContentHeight = drawerContent.height() - borderHeight; /* Total drawer content height minus border top */
		drawerHiddenHeight = drawerHeight - drawerContentHeight; /* How much to hide the drawer, total height minus content height */
    
	    var defaults = {
				showDrawer: false, /* Drawer hidden on load by default */
				slideSpeed: 700, /* Slide drawer speed 3 secs by default */
				slideTimeout: true, /* Sets time out if set to true showDrawer false will be ignored */
				slideTimeoutCount: 5000, /* How long to wait before sliding drawer */
				drawerContentHeight: drawerContentHeight, /* Div content height no including tab or border */
				drawerHeight: drawerHeight, /* Full div height */
				drawerHiddenHeight: drawerHiddenHeight, /* Height of div when hidden full height minus content height */
				borderHeight: borderHeight /* border height if set in css you cann overwrite but best just leave alone */
	    };
					
		/* Overwrite defaults */
		var options = $.extend(defaults, options);
		
		return this.each(function() {
			
			drawer.init(options, this);
    	
		});		
	};
	
})(jQuery);