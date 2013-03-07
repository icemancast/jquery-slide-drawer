/*!
 * jQuery Poll plugin
 * Examples and documentation at: http://www.icastwork.com
 * Copyright (c) 2013 Isaac Castillo
 * Version: 1.0 (28-FEB-2013)
 * Dual licensed under the MIT and GPL licenses.
 * http://www.icastwork.com/slidedrawer/license
 * Requires: jQuery v1.7.1 or later
*/

;(function ($, window, document, undefined) {

    // Create defaults variables to override
    var pluginName = "slideDrawer";
    var defaults = {
        var1: "value",
		var2: "value"
    };
	
    // Plugin constructor
    function SlideDrawer(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

	// Prototype
    SlideDrawer.prototype = {
		
        init: function () {
			
			setTimeout(function() {
				this.slide( $('#events'), this.config.hiddenHeight, 1000 );
			}, 5000);
	
			$('.clickme').on('click', this.toggle);
			
			// return this;
        },
		
		// Toggle function
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
			div.animate({
				'height': height
			}, speed || 300 );
		},
    };

	// Function wrapper
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new SlideDrawer(this, options));
            }
        });
    };

})(jQuery, window, document);