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
		
		init: function (options, div) {
		
			// hiddenHeight = 
			// console.log(div);
		
			setTimeout(function() {
				drawer.slide( div, options.drawerHiddenHeight, 1000 );
			}, 5000);
			
			// console.log(options.slideSpeed);
		
		},
		
		//Toggle function
		toggle: function() {
			
			// check height then call function
			var div = slideEvents.container,
				divHeight = div.height(),
				fullHeight = this.config.fullHeight,
				hiddenHeight = this.config.hiddenHeight;
						
			(divHeight === fullHeight) ? this.slide( div, hiddenHeight ): this.slide( div, fullHeight );
		},
		
		// Slide function
		slide: function( div, height, speed ) {
			$(div).animate({
				'height': height
			}, speed || 300 );
		}
	};

	// Function wrapper
    $.fn.slideDrawer = function ( options ) {
		
		drawerHeight = this.height();
		drawerContentHeight = this.children('.drawer-content').height();
		drawerHiddenHeight = drawerHeight - drawerContentHeight;
    
	    var defaults = {
	        showDrawer: false, /* Drawer hidden on load by default */
			slideSpeed: 300, /* Slide drawer speed 3 secs by default */
			slideTimeout: true, /* Sets time out if set to true showDrawer false will be ignored */
			slideTimeoutCount: 5000, /* How long to wait before sliding drawer */
			drawerContentHeight: drawerContentHeight, /* Full div height */
			drawerHeight: drawerHeight, /* Not to include tab so you have something to toggle */
			drawerHiddenHeight: drawerHiddenHeight /* Height of div when hidden full height minus content height */
	    };
		
		var options = $.extend(defaults, options);
		
		return this.each(function() {
			
			drawer.init(options, this);			
    		$('.clickme').on('click', drawer.toggle);
    	
		});
	};
	
})(jQuery);







	// var drawer = {
		
        // init: function ( options ) {
			
			// setTimeout(function() {
// 				this.slide( $('#events'), this.config.hiddenHeight, 1000 );
// 			}, 5000);

			// console.log('tester');
	// 
	// 		
	//         },
		
		// Toggle function
		// toggle: function() {
// 			
// 			console.log('lalalalalala');
// 			// check height then call function
// 			var div = slideEvents.container,
// 				divHeight = div.height(),
// 				fullHeight = this.config.fullHeight,
// 				hiddenHeight = this.config.hiddenHeight;
// 						
// 			(divHeight === fullHeight) ? this.slide( div, hiddenHeight ): this.slide( div, fullHeight );
// 		},
		
		// Slide function
		// slide: function( div, height, speed ) {
	// 		div.animate({
	// 			'height': height
	// 		}, speed || 300 );
	// 	}
	// };
       

	// Function wrapper
    // $.fn.slideDrawer = function ( options ) {
  // 		
  // 	    
  // 		
  // 		
  //   };
