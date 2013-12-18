# jQuery Slide Drawer Readme

Feel free to use this script, fork it or redistribute it with any of your projects.

## Install Instructions

1. Make sure you have jquery referenced in your html document I have mine close to the footer section and I use the following:

		<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>

2. Include the following below the jquery script call:

		<script>
			$(function(){
				$('.drawer').slideDrawer();
			});	
		</script>

3. Or if your script is in the head of the html doc use:

		<script>
			$(document).ready(function(){
				$('.drawer').slideDrawer();
			});
		</script>

## Demo

[View Demo Here](http://projects.icastwork.com/jQuerySlideDrawer/)

## File setup

**CSS File** - css/style.css

**Images** - images/bg.png (Only image here for transparent black background. Didn't want transparency in css because it makes images contained to be transparent as well)

**JS Files** - jquery.slidedrawer.js main plugin file and minified jquery.slidedrawer.min.js

**Index File** - for example usage

## Plugin Settings
	
**Settings Explanation**

		$(function(){
			$('.drawer').slideDrawer({
				/* The drawer is hidden by default. It shows then slides down to let user know something is there.
				Three options true, false, 'slide'. True shows on load, false hides on load, 'slide' shows and hides right away */
				showDrawer: false,
				
				/* Slide drawer speed. The speed that the drawer animates down or up */
				slideSpeed: 700,
				
				/* Sets the drawer to slide down after set count if set to true. */
				slideTimeout: true,
				
				/* How long to wait before sliding drawer slides down. */
				slideTimeoutCount: 5000,
				
				/* Div content height no including tab or border. Just the height of the content area.
				The plugin will pick up this height automatically from your css file
				but you can overwrite that with this setting. */
				drawerContentHeight: drawerContentHeight,
				 
				/* Full div height pulls from height set in css but can be overwritten here. */
				drawerHeight: drawerHeight,
				
				/* Height of drawer when hidden. So the tab sticks up. */
				drawerHiddenHeight: drawerHiddenHeight,
				
				/* border height if set in css you can overwrite but best to just leave alone */
				borderHeight: borderHeight
			});
		});

**Should look like:**

		$(function(){
			$('.drawer').slideDrawer({
				showDrawer: true,
				slideSpeed: 700,
				slideTimeout: true,
				slideTimeoutCount: 5000,
			});
		});

## License

The MIT License (MIT) [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2013 Isaac Castillo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
