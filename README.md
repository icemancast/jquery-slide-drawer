# Jquery Slide Drawer
## Install Instructions
-Make sure you have jquery referenced in your html document I have mine close to the footer section and I use the following:
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
-Include the following below the jquery script call:
	<script>
	$(function(){
		$('.drawer').slideDrawer();
	});
	</script>
-Or if your script is in the head of the html doc use:
	<script>
	$(document).ready(function(){
		$('.drawer').slideDrawer({
			showDrawer: true,
			slideTimeout: false,
		});
	});
	</script>
	