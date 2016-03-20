# RelativityJS
## A Web Components Micro Framework
### Welcome!
Hello and welcome to RelativityJS. Before we start, let's make it straight - RelativityJS is not yet another web components framework nor another polyfill. RelativityJS is a micro web components framework that has started out of desire to use pure JS and web components to build my sites and do it rapidly, without cluttered scripts, and setting up all the stuff you do in full blown frameworks (actually I serve my development sites using http-server node.js method, no configuration at all). I needed something so unspoiled with redundant code that it would instantly bootstrap in modern browsers while being able to develop my websites in the blink of an eye (I have already made 2 websites overnight with v.0.0.1 of this framework)
### Compatibility
As my knowledge on other frameworks has grown since I started this project, I have decided to make this framework compatible with the available solutions instead of competing larger developer societies or companies. 
I have decided to make compatibility, interchangeability and complementation one of the key features of RelativityJS. The things you miss there will definitely be here.
If you dig the Internet you'll see that other frameworks also complement each other. So now you'll have more complimentary scripts you will be eager to use. You can wrap other frameworks in Relativity JS custom elements and vice versa.
RelativityJS will provide you with some support to web browsers that have been not ready yet for web components (to a point they get obsolete). Isolated CSS is in my opinion done better here than in other frameworks but to use currentScript method in browsers that don't support it at all you'll need some third party plugin.
### Crystal Clear
You may successfully use RelativityJS if you prefer vanilla JS because the heart of RelatiityJS is the concept, not solutions.
The idea of Relativity JS is to keep the whole framework components in reach of relative links. You link only the features you need at a given point using imports. RelativityJS will bring you this in form you will only need insert some simple HTML tags (custom elements and links) to include features. No scripting at all is needed to insert custom elements and prefabricated behaviors. And if your browser supports web components, no extra script is being made (see the speed of examples using different browsers).
If you're good enough in JS (events, etc) to write your own RelativityJS custom elements (prefabricates), you won't need more than that. And that's the POINT.
## Installation
This code loads the framework
```
<html>
	<head>
	            <script src="bower_components/relativityjs/relativityjs.js"></script>
            
	            <link rel="import" href="bower_components/relativityjs/relativityjs/relativityjs.html" />

	//...
```
## Construction of Elements
There are two elementary types of custom elements you can be created with RelativityJS (if you write more elements you wish to share, do not hesitate to request a pull). These types are registered with the same method as any other elements are registered. Nice a concept of RELATIVITY, isn't it?
Notice:
The id attribute of the template should be unique for your web page as it is your tag name
### template-isolate
If you decide to implement shadow DOM in your template, use template-isolate. This isolates your code from the rest of the document, making it a web component (if your browser supports it).
Example descriptor file isolate-example.html
```
	<template-isolate>
		<template id="isolate-example">
			<p>This is an example of a custom shadow DOM element with content <content></content>. <span>Notice the font color is isolated from main.css</span>.</p>
		</template>
		<template id=”isolate-template-2”>
			You can define more custom elements just adding a html tag, that's FASTER THAN LIGHT!
		</template>
	</template-isolate>
```
Example use:
```
	<link rel=”import” href=”isolate-example.html” />
	<isolate-example>Hello World!</isolate-example>
```
Result:
```
	 This is an example of a custom shadow DOM element with content Hello World!.  Notice the font color is isolated from main.css.
```
### template-inherit
Example descriptor file inherit-example.html :
```
	<template-inherit>
		<template id="inherit-example">
        			<p>This is an example of a custom element with content <content></content>. <span>Notice the font color is inherited from main.css</span>.</p>
    		</template>
		<template id=”inherit-template-2”>
			You can define more custom elements just adding a html tag, that's FASTER THAN LIGHT!
		</template>
	</template-inherit>
```
Example use:
```
	<link rel=”import” href=”inherit-example.html” />
	<inherit-example>Hello World!</isolate-example>
```
Result:
```
	 This is an example of a custom element with content Hello World!.  Notice the font color is inherited from main.css.
```
## Key / unique features
Apart from using web components (obviously) RelativityJS provides the following features:
### Custom INHERITING elements with <content></content>
You can encapsulate content in custom elements that not use shadow DOM (register these elements using <template-inherit> constructor tag). This adds <content> tag functionality just as in shadow root method but doesn't isolate your element like shadow DOM does by default (and unfortunately browsers and other frameworks seem to have no other option apart from writing lines of deprecating ::shadow or /deep/ CSS).
### Nested elements
You can nest your elements which is quite obvious but it's worth mentioning that it works quite well also with RelativityJS' mixture of custom inheriting and isolate elements.
Use:
```
	<inherit-example-3><translate-me>Hello World!</translate-me></inherit-example-3>
```
Result:
```
	:D:D:D Hello World! :D:D:D
```
### No scripting
No scripting necessary to create your component-ready website (and no backend partials etc). Again, inherit custom elements do the trick (yes I know I'm boasting about it :P )
#### TODO
Extend relativityjs components methods by passing callback functions with data attributes (doable, tested, scheduled for v0.3.0)
```
        <template-isolate>
            <template id='my-first-template' my-first-option="" my-second-option="">
                some code
            </template>
        </template-isolate>
        
        <template-inherit>
            <template id='my-first-template' my-first-option="" my-second-option="">
                some code
            </template>
        </template-inherit>
```
### ShadowCSS Compatibility Done With Pure CSS
Outside-in compatibility mode shadow css in RelativityJS is done with pure CSS (todo add more markup for complex cases)
Inside-out compatibility requires 3rd party script (I've seen 2) but it's in TODO (certainly it will be done in a unique, simple way)
### Compatible 
Compatible with other frameworks and compatibility scripts
Currently you need some 3rd party compatibility script to have `currentScript` method to emulate shadowRoot. There's one great one out there I'm considering writing my own or offering them mutual links to our projects.
## TODO, Contributing, Support
There's a lot todo, you can help in many ways:
- include AMD loading third party compatibility scripts
- create framework plugins / custom elements
- create compatibility scripts (inside-out compatibility is scheduled for v0.2.0)
- lore (just write how RelativityJS could be improved, someone will code it, or maybe you have a solution, then create a pull request)
- link to your projects for link to RelativityJS
- financial support (buy a hosted website done with RelativityJS and web components in mind)
- spread the news
- any other cool thing not listed here
- 
## Demo and homepage
Examples [here](http://relativityjs.maximus.net.pl/bower_components/relativityjs/examples/).

Homepage [here](http://relativityjs.maximus.net.pl).
