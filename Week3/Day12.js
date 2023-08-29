// 문제 12. 발전기

DFS를 활용한 풀이 - 4개 런타임 에러 남
const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
const input = [];
rl.on('line', line => {
  input.push(line);
  N = Number(input[0]);
  if (input.length === 1 + N) rl.close();
});

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let arr = [];
let visited = [];
let answer = 0;

const dfs = (X, Y) => {
  for (let i = 0; i < 4; i++) {
    let nx = X + dx[i];
    let ny = Y + dy[i];
    if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
      if (arr[nx][ny] && !visited[nx][ny]) {
        arr[nx][ny] = 0;
        visited[nx][ny] = true;
        dfs(nx, ny);
      }
    }
  }
};
rl.on('close', () => {
  for (let i = 1; i <= N; i++) {
    arr.push(input[i].split(' ').map(Number));
    visited.push(new Array(N).fill(false));
  }
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (arr[x][y]) {
        answer++;
        dfs(x, y);
      }
    }
  }
  console.log(answer);
});

// BFS를 활용한 풀이
const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
const input = [];
rl.on('line', line => {
  input.push(line);
  N = Number(input[0]);
  if (input.length === 1 + N) rl.close();
});

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let arr = [];
let visited = [];
let answer = 0;

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

const bfs = (X, Y) => {
  let queue = new Queue();
  queue.enqueue([X, Y]);
  visited[X][Y] = true;

  while (queue.getLength() != 0) {
    [X, Y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      let nx = X + dx[i];
      let ny = Y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
        if (arr[nx][ny] && !visited[nx][ny]) {
          queue.enqueue([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
};

rl.on('close', () => {
  for (let i = 1; i <= N; i++) {
    arr.push(input[i].split(' ').map(Number));
    visited.push(new Array(N).fill(false));
  }
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (arr[x][y] && !visited[x][y]) {
        answer++;
        bfs(x, y);
      }
    }
  }
  console.log(answer);
});
