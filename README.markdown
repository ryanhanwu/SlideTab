#SlideTab jQuery Plugin 

version 1.0

A jQuery plugin which provides sliding tabs with Following features.

* Arrow key control - LEFT, and RIGHT
* Fiexiable Width (implemented without TABLE)

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

#Config
As you can see, __SlideTab__ don't count on any id or CSS class except the initial id. That means it will generate them automatically. 

##Item Begin
__start : number __

Start from specific item 

	$("#mySlideMenu").slideTab({
		start : 1
	});

##Width 
__SlideTab__ supports flexiable width, you can assign width directly to the DIV around it, the menu items will get average width by default.

	<style>
		#mySlideMenu {
			width: 400px;
		}
	</style>
	<style>
		#mySlideMenu {
			width: 600px;
		}
	</style>
##Effect And Speed
__SlideTab__ supports custom effect(need jQuery easing Plug-in)  and speed configuration

	$("#mySlideMenu").slideTab({
		effect : 'linear',
		speed : 678
	});

##Separated Content 

##Click Event

##Work With Hash Tag

#Author

[Ryan Wu](http://about.me/flyworld) aka. flyworld

designed by **Eric  Brecht**

#Other

Copyright (c) 2011 Flyworld. Licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) license.
