var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.dequeue = function() {
    var temp = storage['0'];
    delete storage['0'];
    var counter = 0;
    for(let key in storage){
      storage[counter] = storage[key];
      counter++;
    }
    delete storage[Object.keys(storage).length - 1];
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
