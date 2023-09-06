// 문제 17. 통신망 분석

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', line => {
  input.push(line.trim());
});

rl.on('close', () => {
  const [N, M] = input[0].split(' ').map(Number);
  const graph = {};
  // 양방향 그래프 생성
  for (let i = 1; i <= M; i++) {
    const [s, e] = input[i].split(' ').map(Number);
    if (!(s in graph)) {
      graph[s] = [];
    }
    if (!(e in graph)) {
      graph[e] = [];
    }
    graph[s].push(e);
    graph[e].push(s);
  }

  const visited = new Array(N + 1).fill(false);
  const result = [];
  let density = 0;

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      const q = [i];
      const component = new Set();

      while (q.length > 0) {
        const now = q.pop();

        if (!visited[now]) {
          visited[now] = true;
          component.add(now);
          if (graph[now]) {
            for (const to of graph[now]) {
              if (!visited[to]) {
                q.push(to);
              }
            }
          }
        }
      }
      let edge = 0;

      for (const j of component) {
        if (graph[j]) {
          for (const to of graph[j]) {
            if (component.has(to)) {
              edge += 1;
            }
          }
        }
      }

      const tempDensity = edge / component.size;

      if (Math.abs(tempDensity - density) < 1e-8) {
        if (
          component.size > result.length ||
          (component.size === result.length && i < result[0])
        ) {
          result.length = 0;
          Array.prototype.push.apply(result, Array.from(component));
          density = tempDensity;
        }
      } else if (tempDensity > density) {
        result.length = 0;
        Array.prototype.push.apply(result, Array.from(component));
        density = tempDensity;
      }
    }
  }

  result.sort((a, b) => a - b);
  console.log(result.join(' '));
});
