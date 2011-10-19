#SlideTab jQuery Plugin 
##version 1.0

Copyright (c) 2011 Flyworld. Licensed under the MIT license.

---
#Usage
Add __SlideTab__ css to your html file

	<link rel="stylesheet" type="text/css" href="res/jquery.slidetab-1.0.css" />

Load [jQuery](http://jquery.com/), and the __SlideTab__ plugin:

    <script type="text/javascript" src="lib/jquery.min.js"></script>
    <script type="text/javascript" src="src/jquery.slidetab-1.0.min.js"></script>

Add HTML like following DOM structure


	<div id="mySlideMenu">
		<ul>
			<li>
				<a>Default</a>
			</li>
			<li>
				<a>Specify Start Item</a>
			</li>
		</ul>
		<div>
			<ul>
				<li>
					test
				</li>
				<li>
					test2
				</li>
			</ul>
		</div>
	</div>

Then enable slideTab function 
		
	$("#mySlideMenu").slideTab();

As you can see, __SlideTab__ don't count on any id or CSS class except the initial id. That means it will generate them automatically.
    