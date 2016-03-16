# relativityjs
A Web Components Micro Framework

1. Key features
- custom elements that can encapsulate content like with shadow DOM 
    - you can control custom element relations with the DOM tree - decide if they are isolated or not
    - thanks to pseudo `createShadowRoot()` method relativityjs' custom elements can retain inheritance from parent, so it's you who decide whether you want the element to inherit from parent or not
    - use `<content></content>` in your components like you do in shadow DOM components
    - use these elements as an alternative to deprecating `/deep/` and `::shadow` CSS so you can now use elements from your old site templates with pure HTML and no worries
    - isolated / inheriting custom elements can be mixed and nested :)
- support webcomponents with a user-friendly interface 
    - your component uses `<link rel=` to faciliate with relativityjs components (so here you go, full RELativity :)
    - as a result, you don't have to do scripting at all, write pure HTML
    - you can extend relativityjs components by passing callback functions with data attributes
- auto-implement compatibility for Mozilla and IE

2. Readings
- http://www.html5rocks.com/
- http://webcomponents.org/



  
