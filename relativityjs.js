"use strict";

(function () {
    /**
     * Register RelativityJs service
     */
    function RelativityJs(native) {
        this.native = native;
        this.methodName = native ? 'currentScript' : '_currentScript';
    }
    RelativityJs.prototype = {
        template: function (func) {
            //define element
            var templates = document[this.methodName].ownerDocument.querySelectorAll('template');

            for (var i = 0; i < templates.length; i++) {
                //create element
                var template = templates[i];

                template.innerHTML = template.innerHTML.replace('<style>', '<style scoped>');

                var el = Object.create(HTMLElement.prototype);

                //create callback
                this['template' + func](el, template);

                //register element
                document.registerElement(template.id, {prototype: el});
            }
        },
        templateInherit: function (el, template) {
            el.createdCallback = function () {

                //replace content like in shadow element
                template.content.querySelector('content').innerHTML = this.innerHTML;
                this.innerHTML = "";

                //create dom node
                var domNode = document.importNode(template.content, true);

                //create root element
                this.appendChild(domNode);
            };

        },
        templateIsolate: function (el, template) {
            var native = this.native;
            el.createdCallback = function () {
                if (native) template.innerHTML = '<section class="relativity-reset">' + template.innerHTML + '</section>';
                //create dom node
                var domNode = document.importNode(template.content, true);

                this.createShadowRoot().appendChild(domNode);
            };
        }
    };
    window.relativityJs = new RelativityJs(!document._currentScript || document.currentScript == document._currentScript);
})();
