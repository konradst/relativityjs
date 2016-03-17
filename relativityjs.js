"use strict";
(function () {

    /**
     * Register RelativityJs service
     */
    function RelativityJs () {};
    RelativityJs.prototype = {
        methodName: (function () {
            return (document._currentScript === undefined) ? 'currentScript' : '_currentScript';
        })(),
        template: function (func) {
            //define element
            var templates = document[this.methodName].ownerDocument.querySelectorAll('template');

            for(var i = 0; i < templates.length; i++) {
                //create element
                var template = templates[i];
                var el = Object.create(HTMLElement.prototype);

                //create callback
                el.createdCallback = function() {
                    //replace content like in shadow element
                    template.content.querySelector('content').innerHTML = this.innerHTML;
                    this.innerHTML = "";

                    // import template
                    var clone = document.importNode(template.content, true);

                    func(this, clone);
                };

                //register element
                document.registerElement(template.id, {prototype: el});
            }
        },
        templateInherit: function() {
            this.template(function (ref, clone) {
                ref.appendChild(clone);
            });
        },
        templateIsolate: function () {
            this.template(function (ref, clone) {
                ref.createShadowRoot().appendChild(clone);
            });
        }
    }
    window.relativityJs = new RelativityJs();
})();
