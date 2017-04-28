/**
 * Created by ahmetcan.guven on 28.04.2017.
 */

///<reference path='./constants.ts'/>

module DomVL{
  export class vElement{
    children: Array<vElement> = [];
    attributes: Array<[string, string]> = [];
    tagName: string;
    vDomId: string;
    model: string;

    constructor(htmlElement:HTMLElement, rootCB){
      this.parseAttributes(htmlElement);
      this.buildChilds(htmlElement, rootCB);
      this.getModel();
      rootCB(this.model);
    }

    private parseAttributes(htmlElement:HTMLElement){
      this.tagName = htmlElement.tagName;
      this.vDomId = htmlElement.getAttribute(constants.rootAttributeName);
      let i = htmlElement.attributes.length;
      while(i--){
        let attrName = htmlElement.attributes[i].name;
        this.attributes.push([attrName, htmlElement.getAttribute(attrName)]);
      }
    }

    private buildChilds(htmlElement:HTMLElement, rootCB){
      let [children, length] = Util.getChildElements(htmlElement);
      let i: number = Number(length);
      while(i--){
        this.children.push(new vElement(children[i], rootCB));
      }
    }

    private getModel(){
      let i = this.attributes.length;
      while(i--){
        if(this.attributes[i][0] == constants.modelAttributeName){
          this.model = this.attributes[i][1];
        }
      }
    }
  }

  export class vRoot{
    element: vElement;
    scope = [];



    constructor(element){
      this.element = new vElement(element, this.modelCallback.bind(this));
    }

    modelCallback(modelName){
        if(modelName){
          this.scope.push(modelName);
        }
    }

    changeTrigger(){

    }
  }
}
