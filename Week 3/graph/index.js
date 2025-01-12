class Graph{
    constructor(){
        this.adjacencyList ={}
    }
    addvertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set();
        }

    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
           this.addvertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjacencyList )
        console.log(vertex + "=>"+ [...this.adjacencyList[vertex]])
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        for(let adjacencyVertex of this.adjacencyList[vertex]){
            this.removeEdge(adjacencyVertex,vertex)
        }
        delete this.adjacencyList[vertex]
    }
}
const graph =new Graph();
graph.addvertex('a');
graph.addvertex('a');

graph.addvertex('b');
graph.addvertex('c')
graph.addEdge("a","b")
graph.addEdge("c","b")
// graph.display()
// graph.removeEdge("a","b")
graph.display()
// graph.removeVertex('a')
graph.display()
