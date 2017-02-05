class MithaiStore{
  constructor(/*number*/ size){
      this.size = size || 100;
      this._cache = [];
  }

  getAll(){
    if(this._cache.length < this.size){
      for(var i = 0; i < this.size; ++i){
        this.getObjectAt(i);
      }
    }
    return this._cache.slice();
  }

}/* end of class */


module.exports = MithaiStore;
