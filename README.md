# relativityjs
The web components micro framework.

Key features:
- custom elements that can encapsulate content like with shadow DOM (but you can control their relations in the DOM tree whether they are isolated or not)
    - thanks to pseudo `createShadowRoot()` method relativityjs custom elements retain inheritance from parent, so it's you who decide whether you want the element to inherit from parent or not
    - use `<content></content>` in your components like you do in shadow DOM components
    - use inheriting elements as an alternative to `/deep/` and `::shadow` CSS so you can now use elements from your old site templates with pure HTML
    - isolated / inheriting custom elements can be mixed and nested :)
- support webcomponents with a user-friendly interface (relative links - so there's the name's ethymology :)
    - your component uses imports to faciliate with relativityjs
    - thatrequires you no scripting at all to use its key features as they are passed by `<link rel='import'...`
    - you can extend the features by passing functions with data attributes
- auto-implement compatibility for Mozilla and IE

Credits
http://webcomponents.org/
http://www.html5rocks.com/


  
