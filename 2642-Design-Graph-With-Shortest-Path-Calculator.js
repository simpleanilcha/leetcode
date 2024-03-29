/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function (n, edges) {
  this.n = n;
  this.distance = Array.from({ length: n }, () => Array(n).fill(Number.MAX_SAFE_INTEGER));

  for (let i = 0; i < n; i++) {
    this.distance[i][i] = 0;
  }

  for (const edge of edges) {
    this.distance[edge[0]][edge[1]] = edge[2];
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.distance[i][j] = Math.min(
          this.distance[i][j],
          this.distance[i][k] + this.distance[k][j]
        );
      }
    }
  }
};

/** 
* @param {number[]} edge
* @return {void}
*/
Graph.prototype.addEdge = function (edge) {
  if (this.distance[edge[0]][edge[1]] <= edge[2]) {
    return;
  }
  this.distance[edge[0]][edge[1]] = edge[2];

  for (let i = 0; i < this.n; i++) {
    for (let j = 0; j < this.n; j++) {
      this.distance[i][j] = Math.min(
        this.distance[i][j],
        this.distance[i][edge[0]] + edge[2] + this.distance[edge[1]][j]
      );
    }
  }
};

/** 
* @param {number} node1 
* @param {number} node2
* @return {number}
*/
Graph.prototype.shortestPath = function (node1, node2) {
  if (this.distance[node1][node2] === Number.MAX_SAFE_INTEGER) {
    return -1;
  }
  return this.distance[node1][node2];
};

/** 
* Your Graph object will be instantiated and called as such:
* var obj = new Graph(n, edges)
* obj.addEdge(edge)
* var param_2 = obj.shortestPath(node1,node2)
*/