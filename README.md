# Jquery Slide Drawer
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
	