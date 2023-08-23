// 문제 7. 구름 찾기 깃발

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let dx = [0, 0, 1, 1, 1, -1, -1, -1];
let dy = [1, -1, 1, 0, -1, 1, 0, -1];
let input = [];
let matrix = [];
let N, M;
let answer = 0;

rl.on('line', (line) => {
  input.push(line);
  if (input.length === 1 + Number(input[0].split(' ')[0])) rl.close();
});

rl.on('close', () => {
  [N, K] = input[0].split(' ').map(Number);
  for (let i = 1; i <= N; i++) {
    matrix.push(input[i].split(' ').map(Number));
  }

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      let goormCount = 0;
      // 깃발이 없는 위치면
      if (matrix[x][y] === 0) {
        // matrix x, y의 상하좌우 대각선을 탐색한다.
        for (let i = 0; i < 8; i++) {
          let nx = x + dx[i];
          let ny = y + dy[i];
          // matrix를 벗어나지 않고
          if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
            // 깃발이 있는 위치면 카운트를 더해준다.
            if (matrix[nx][ny] === 1) {
              goormCount++;
            }
          }
        }
        if (goormCount === K) {
          answer++;
        }
      }
    }
  }
  console.log(answer);
});
