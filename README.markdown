#SlideTab jQuery Plugin 
##version 1.0

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
				<a>Tab1</a>
			</li>
			<li>
				<a>Tab <br /> 2</a>
			</li>
		</ul>
		<div>
			<ul>
				<li>
					Content 1
				</li>
				<li>
					Content 2
				</li>
			</ul>
		</div>
	</div>

Then enable slideTab function 
		
	$("#mySlideMenu").slideTab();

As you can see, __SlideTab__ don't count on any id or CSS class except the initial id. That means it will generate them automatically.
    
---
#Author

[Ryan Wu](http://about.me/flyworld) aka. flyworld

designed by **Eric  Brecht**

---
#Other

Copyright (c) 2011 Flyworld. Licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) license.
