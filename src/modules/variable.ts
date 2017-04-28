/**
 * Created by ahmetcan.guven on 28.04.2017.
 */

module DomVL{
  export class vVariable{
    private _i:number = 5;

    get(){
      return this._i;
    }

    set(){
      this._i = 5;
      console.log("i update");
    }
  }
}
