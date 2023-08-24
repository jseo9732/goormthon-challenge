// 문제 9. 폭탄 구현하기

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', line => {
  input.push(line);
  if (
    input.length ===
    1 + input[0].split(' ').map(Number)[0] + input[0].split(' ').map(Number)[1]
  ) {
    rl.close();
  }
});

let N, K;
let matrix = [];
let answer = [];
// 상하좌우
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

const addBomb = (ground, x, y) => {
  switch (ground) {
    case '0':
      answer[x][y] += 1;
      break;
    case '#':
      break;
    case '@':
      answer[x][y] += 2;
      break;
  }
};

rl.on('close', () => {
  [N, K] = input[0].split(' ').map(Number);
  for (let i = 1; i <= N; i++) {
    matrix.push(input[i].split(' '));
  }
  for (let i = 0; i < N; i++) {
    answer.push(new Array(N).fill(0));
  }
  for (let i = 1 + N; i < 1 + N + K; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    y = y - 1;
    x = x - 1;
    addBomb(matrix[x][y], x, y);
    for (let j = 0; j < 4; j++) {
      let nx = x + dx[j];
      let ny = y + dy[j];
      if (nx >= 0 && nx < N && ny >= 0 && ny < N && matrix[nx][ny]) {
        addBomb(matrix[nx][ny], nx, ny);
      }
    }
  }
  let max = -1;
  for (const k of answer) {
    for (const l of k) {
      max = Math.max(l, max);
    }
  }
  console.log(max);
});
