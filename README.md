jsMultiTypeWriter
=================

This script is using for Type Writing for RTL Languages liek: Farsi, Arabic...etc.

# Usage

Include the script into the page

	<script src="typewriter.js" language="javascript"></script>
	
inside of BODY Tag

	<span id="typeWriterTips" class="writerElementID"></span>
	<script>
		var list = new Array();
		list[0] = 'جمله شماره ۱';
		list[1] = 'جمله شماره ۲';
		list[2] = 'جمله شماره ۳';
		var writer1 = new typeWriter();
		writer1.init({'obj':writer1, 'element':$('#writerElementID'), 'list':list, 'time':30, 'delay':2000})
	</script>

You can add as many type writer as you want.

# License
	GPL 3