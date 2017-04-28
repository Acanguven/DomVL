var DomVL;
(function (DomVL) {
    var constants = (function () {
        function constants() {
        }
        return constants;
    }());
    constants.modelAttributeName = "v-model";
    constants.rootAttributeName = "domvl";
    DomVL.constants = constants;
})(DomVL || (DomVL = {}));
var DomVL;
(function (DomVL) {
    var Util = (function () {
        function Util() {
        }
        Util.getAllElementsWithAttribute = function (attribute) {
            var matchingElements = [];
            var allElements = document.getElementsByTagName('*');
            var i = allElements.length;
            var length = i;
            while (i--) {
                if (allElements[i].getAttribute(attribute) !== null) {
                    matchingElements.push(allElements[i]);
                }
            }
            return [matchingElements, length];
        };
        Util.getChildElements = function (element) {
            var children = [];
            var i = element.children.length;
            var length = i;
            while (i--) {
                children.push(element.children[i]);
            }
            return [children, length];
        };
        return Util;
    }());
    DomVL.Util = Util;
})(DomVL || (DomVL = {}));
var DomVL;
(function (DomVL) {
    var vElement = (function () {
        function vElement(htmlElement, rootCB) {
            this.children = [];
            this.attributes = [];
            this.parseAttributes(htmlElement);
            this.buildChilds(htmlElement, rootCB);
            this.getModel();
            rootCB(this.model);
        }
        vElement.prototype.parseAttributes = function (htmlElement) {
            this.tagName = htmlElement.tagName;
            this.vDomId = htmlElement.getAttribute(DomVL.constants.rootAttributeName);
            var i = htmlElement.attributes.length;
            while (i--) {
                var attrName = htmlElement.attributes[i].name;
                this.attributes.push([attrName, htmlElement.getAttribute(attrName)]);
            }
        };
        vElement.prototype.buildChilds = function (htmlElement, rootCB) {
            var _a = DomVL.Util.getChildElements(htmlElement), children = _a[0], length = _a[1];
            var i = Number(length);
            while (i--) {
                this.children.push(new vElement(children[i], rootCB));
            }
        };
        vElement.prototype.getModel = function () {
            var i = this.attributes.length;
            while (i--) {
                if (this.attributes[i][0] == DomVL.constants.modelAttributeName) {
                    this.model = this.attributes[i][1];
                }
            }
        };
        return vElement;
    }());
    DomVL.vElement = vElement;
    var vRoot = (function () {
        function vRoot(element) {
            this.scope = [];
            this.element = new vElement(element, this.modelCallback.bind(this));
        }
        vRoot.prototype.modelCallback = function (modelName) {
            if (modelName) {
                this.scope.push(modelName);
            }
        };
        vRoot.prototype.changeTrigger = function () {
        };
        return vRoot;
    }());
    DomVL.vRoot = vRoot;
})(DomVL || (DomVL = {}));
var DomVL;
(function (DomVL) {
    var initEngine = (function () {
        function initEngine() {
            this.buildTree();
        }
        initEngine.prototype.buildTree = function () {
            var nodeList = DomVL.Util.getAllElementsWithAttribute(DomVL.constants.rootAttributeName)[0];
            var arr = Array.prototype.slice.call(nodeList);
            var i = arr.length;
            while (i--) {
                DomVL.Instances.push(new DomVL.vRoot(arr[i]));
            }
        };
        return initEngine;
    }());
    DomVL.Instances = new Array();
    new initEngine();
})(DomVL || (DomVL = {}));
var DomVL;
(function (DomVL) {
    var vVariable = (function () {
        function vVariable() {
            this._i = 5;
        }
        vVariable.prototype.get = function () {
            return this._i;
        };
        vVariable.prototype.set = function () {
            this._i = 5;
            console.log("i update");
        };
        return vVariable;
    }());
    DomVL.vVariable = vVariable;
})(DomVL || (DomVL = {}));
//# sourceMappingURL=domvl.js.map