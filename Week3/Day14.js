// 문제 14. 작은 노드

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  const [N, M, K] = input[0].split(' ').map(Number);
  let graph = [];
  let visited = Array(N).fill(false);
  for (let i = 0; i <= N; i++) {
    graph.push([]);
  }
  for (let i = 1; i <= M; i++) {
    const [s, e] = input[i].split(' ').map(Number);
    graph[s].push(e);
    graph[e].push(s);
  }
  let lastNode = 0;
  let count = 0;

  const dfs = (graph, v, visited, lastNode) => {
    lastNode = v;
    count++;
    for (x of graph[v].sort((a, b) => a - b)) {
      if (!visited[x] && !visited[v]) {
        visited[v] = true;
        lastNode = dfs(graph, x, visited);
      }
    }
    return lastNode;
  };

  lastNode = dfs(graph, K, visited, lastNode);
  console.log(count, lastNode);
});
