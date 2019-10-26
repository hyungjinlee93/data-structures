
let Node = function (value) {
  this.name = value;
  this.edges = {};
}

// Instantiate a new graph
var Graph = function () {
  this.area = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.area[node] = new Node(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return this.area[node] === undefined ? false : true;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for (let key in this.area[node].edges) {
    delete this.area[key].edges[node];
  }
  delete this.area[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  if ((this.area[fromNode] === undefined) || (this.area[toNode] === undefined)) {
    return false;
  }
  return this.area[fromNode].edges.hasOwnProperty(toNode) && this.area[toNode].edges.hasOwnProperty(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.area[fromNode].edges[toNode] = toNode;
  this.area[toNode].edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  delete this.area[fromNode].edges[toNode];
  delete this.area[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (let key in this.area) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


