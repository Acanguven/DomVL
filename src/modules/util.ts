/**
 * Created by ahmetcan.guven on 28.04.2017.
 */

///<reference path='./constants.ts'/>

module DomVL{
  export class Util{
    static getAllElementsWithAttribute(attribute)
    {
      let matchingElements = [];
      let allElements = document.getElementsByTagName('*');
      let i = allElements.length;
      let length = i;
      while(i--){
        if (allElements[i].getAttribute(attribute) !== null)
        {
          matchingElements.push(allElements[i]);
        }
      }
      return [matchingElements, length];
    }

    static getChildElements(element: HTMLElement){
      let children = [];
      let i = element.children.length;
      let length = i;
      while(i--){
        children.push(element.children[i]);
      }
      return [children, length];
    }
  }
}
