const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let visited;
let count = 1;
// 그래프 선언
let graph = {};

let input = [];
rl.on('line', line => {
  input.push(line.split(' ').map(Number));
  if (input.length === input[0][1] + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  const [N, M] = input[0];
  visited = Array(N + 1).fill(0);
  const check = Array.from(Array(N + 1), () => Array(N + 1).fill(false));
  for (let i = 1; i <= M; i++) {
    let [s, e] = input[i];
    if (!graph[s]) {
      graph[s] = [];
    }
    graph[s].push(e);
    check[s][e] = true;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i] === 0) {
      let q = [i];
      while (q.length > 0) {
        const currentNode = q.shift();
        visited[currentNode] = count;
        if (!graph[currentNode]) {
          continue;
        }
        for (const nextNode of graph[currentNode] || []) {
          if (graph[nextNode]) {
            if (check[nextNode][currentNode] && visited[nextNode] === 0) {
              q.push(nextNode);
            }
          }
        }
      }
      count++;
    }
  }

  console.log(count - 1);
});
