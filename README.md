# relativityjs

**Web Components Micro Framework**

1. Key features
    - you get custom elements that can encapsulate content like you do with shadow DOM **and at the same time**
        - **you can control custom element relations with the DOM tree** - decide if they are isolated or not
        - you can use `<content></content>` to transclude code including other custom elements in your components like you do with shadow DOM components' content
        - you can use these elements as an alternative to deprecating `/deep/` and `::shadow` CSS so you can now use elements from your old site templates with pure HTML and no worries
        - isolated / inheriting custom elements can be mixed and **nested** :)
    - support webcomponents with a user-friendly interface
        - your component uses `<link rel=` to faciliate with relativityjs components (so here you go, **full RELativity** :)
            ```
            <!--the only thing you need to use the framework-->
            <script src="bower_components/relativityjs/relativityjs.js"></script>
            <link rel="import" href="bower_components/relativityjs/relativityjs/relativityjs.html" />
            ```
        - as a result, you don't have to do scripting at all, **all these things you can do with pure HTML**
        - you can extend relativityjs components by passing callback functions with data attributes
    - implement compatibility with Mozilla and IE
    - multiple templates with just one component
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

    - make it compatible with Polymer (todo)

2. Demo and homepage [here](http://relativityjs.maximus.net.pl)

3. See also
    - http://www.html5rocks.com/
    - http://webcomponents.org/
    - https://www.polymer-project.org/1.0/docs/start/reusableelements.html



  
