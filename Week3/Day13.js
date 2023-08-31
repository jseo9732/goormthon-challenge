// 문제 13. 발전기 (2)

// BFS를 활용한 풀이: 틀림
const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, K;
let input = [];
rl.on('line', line => {
  input.push(line);
  [N, K] = input[0].split(' ').map(Number);
  if (input.length === 1 + N) rl.close();
});

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  // 원소 삽입
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  // 원소 삭제
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  // 원소 조회
  peek() {
    return this.items[this.headIndex];
  }
  // 큐 길이 구하기
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let arr = [];
let visited = [];
let V = new Array(31).fill(0);

const bfs = (x, y, number) => {
  let queue = new Queue();
  queue.enqueue([x, y]);
  visited[x][y] = true;
  VNum = 1;
  while (queue.getLength() !== 0) {
    [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx;
      let ny = y + dy;
      if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
        if (number === arr[nx][ny] && !visited[nx][ny]) {
          queue.enqueue([x, y]);
          VNum++;
          visited[nx][ny] = true;
        }
      }
    }
  }
  return VNum;
};

rl.on('close', () => {
  for (let i = 1; i <= N; i++) {
    arr.push(input[i].split(' ').map(Number));
    visited.push(Array(N).fill(false));
  }
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (!visited[x][y]) {
        console.log(bfs(x, y, arr[x][y]));
        if (bfs(x, y, arr[x][y]) >= K) {
          console.log(arr[x][y]);
          V[arr[x][y]] += 1;
        }
      }
    }
  }
  console.log(V);
});

// DFS를 활용한 풀이: 틀림
const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, K;
let input = [];
rl.on('line', line => {
  input.push(line);
  [N, K] = input[0].split(' ').map(Number);
  if (input.length === 1 + N) rl.close();
});

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let arr = [];
let visited = [];
let V = new Array(31).fill(0);

const dfs = (x, y, count) => {
  count++;
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
      if (arr[x][y] === arr[nx][ny] && !visited[nx][ny]) {
        count = dfs(nx, ny, count);
      }
    }
  }
  return count;
};

rl.on('close', () => {
  for (let i = 1; i <= N; i++) {
    arr.push(input[i].split(' ').map(Number));
    visited.push(Array(N).fill(false));
  }
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (!visited[x][y]) {
        if (dfs(x, y, 0) >= 2) {
          V[arr[x][y]] += 1;
        }
      }
    }
  }
  console.log(V.lastIndexOf(Math.max(...V)));
});

// 해설 코드보고 수정한 DFS: 최종 정답
const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, K;
let input = [];
rl.on('line', line => {
  input.push(line);
  [N, K] = input[0].split(' ').map(Number);
  if (input.length === 1 + N) rl.close();
});

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  // 원소 삽입
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  // 원소 삭제
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  // 원소 조회
  peek() {
    return this.items[this.headIndex];
  }
  // 큐 길이 구하기
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let arr = [];
let visited = [];
let V = {};

const bfs = (x, y, target) => {
  let queue = new Queue();
  queue.enqueue([x, y]);
  VNum = 1;
  while (queue.getLength() !== 0) {
    [x, y] = queue.dequeue();
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
        if (target === arr[nx][ny] && !visited[nx][ny]) {
          queue.enqueue([nx, ny]);
          VNum++;
          visited[nx][ny] = true;
        }
      }
    }
  }
  return VNum;
};

rl.on('close', () => {
  for (let i = 1; i <= N; i++) {
    arr.push(input[i].split(' ').map(Number));
    visited.push(Array(N).fill(false));
  }
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (!visited[x][y]) {
        if (bfs(x, y, arr[x][y]) >= K) {
          V[arr[x][y]] = (V[arr[x][y]] || 0) + 1;
        }
      }
    }
  }
  const sortedScores = Object.entries(V).sort(
    (a, b) => b[1] - a[1] || b[0] - a[0]
  );
  console.log(sortedScores.length ? sortedScores[0][0] : -1);
});
