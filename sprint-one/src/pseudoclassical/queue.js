var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.size = function (){
  return Object.keys(this.storage).length;
}

Queue.prototype.dequeue = function (){
  let temp = this.storage[0];
  delete this.storage[0];
  let counter = 0;
  for (let keys in this.storage){
    this.storage[counter] = this.storage[keys];
    counter++;
  }
  delete this.storage[Object.keys(this.storage).length - 1];
  return temp;
}

Queue.prototype.enqueue = function (value){
  this.storage[Object.keys(this.storage).length] = value;
}