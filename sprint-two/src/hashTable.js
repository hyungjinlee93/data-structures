var HashTable = function() {
  this._limit = 8;
  this.currentSize = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.reHash = function(){
  let pairs = [];
  this._storage.each(function(value){
    if(typeof value === 'object'){
      let valueKeys = Object.keys(value);
      if(valueKeys){
        for(let i = 0; i < valueKeys.length; i++){
          let keyName = valueKeys[i];
          pairs.push([keyName, value[keyName]]);
        }
      }
    }
  });
  this.currentSize = 0;
  this._storage = LimitedArray(this._limit);
  for(let i = 0; i < pairs.length; i++){
    this.insert(pairs[i][0],pairs[i][1]);
  }
}

HashTable.prototype.insert = function(k, v) {
  this.currentSize++;
  var index = getIndexBelowMaxForKey(k, this._limit);
  let insertedObject = {};
  insertedObject[k] = v;
  let existingObject = this._storage.get(index);
  if(existingObject){
    existingObject[k] = v;
    insertedObject = existingObject;
  }
  this._storage.set(index, insertedObject);
  //check if too big
  if(this.currentSize/this._limit > 0.75){
    this._limit *= 2;
    this.reHash();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage.get(index)){
    return undefined;
  }
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  this.currentSize--;
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value,iterant,array){
    if (iterant === index){
      delete array[index][k];
    }
  });
  //check if too small
  if(this.currentSize/this._limit < 0.25){
    this._limit *= 0.5;
    this.reHash();
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


