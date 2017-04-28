/**
 * Created by ahmetcan.guven on 28.04.2017.
 */

///<reference path='./modules/util.ts'/>
///<reference path='./modules/element.ts'/>
///<reference path='./modules/constants.ts'/>

module DomVL {
  class initEngine{
    constructor(){
      this.buildTree();
    }

    buildTree(){
      let [nodeList] = Util.getAllElementsWithAttribute(constants.rootAttributeName);
      let arr = Array.prototype.slice.call( nodeList );
      let i = arr.length;
      while(i--){
        DomVL.Instances.push(new vRoot(arr[i]));
      }
    }
  }

  export let Instances:Array<vRoot> = new Array<vRoot>();

  new initEngine();
}



