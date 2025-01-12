class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "=>" + [...this.adjacencyList[vertex]]);
    }
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return console.log("vertex  not found");
    }
    for (let adjacencyVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex];
  }
  dfs(startVertex) {
    const visited = new Set();
    const dfsHelper = (vertex) => {
      console.log(vertex);
      visited.add(vertex) ;
      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };
    dfsHelper(startVertex);
  }
  bfs(startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);
      visited.add(currentVertex);
      for (let neighbor of this.adjacencyList[currentVertex]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("B", "D");
graph.display();
console.log(graph.hasEdge("A", "B"));
// graph.removeEdge("A","B")
console.log(graph.hasEdge("A", "B"));
graph.display();
// graph.removeVertex("B")
// graph.removeVertex("D")

graph.display();
graph.dfs("A");
graph.bfs("A");
graph.removeEdge("a", "c");
