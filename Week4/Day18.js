// 문제 18. 중첩 점

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N, M;
rl.on('line', line => {
  input.push(line);
  [N, M] = input[0].split(' ').map(Number);
  if (input.length === 1 + M) rl.close();
});

rl.on('close', () => {
  xArr = [];
  yArr = [];
  for (let i = 0; i <= N; i++) {
    xArr.push(new Array(N + 1).fill(0));
    yArr.push(new Array(N + 1).fill(0));
  }

  for (let i = 1; i <= M; i++) {
    let [y, x, d] = input[i].split(' ');
    x = Number(x);
    y = Number(y);
    switch (d) {
      case 'U':
        while (y > 0) {
          yArr[y][x] += 1;
          y--;
        }
        break;
      case 'D':
        while (y <= N) {
          yArr[y][x] += 1;
          y++;
        }
        break;
      case 'L':
        while (x > 0) {
          xArr[y][x] += 1;
          x--;
        }
        break;
      case 'R':
        while (x <= N) {
          xArr[y][x] += 1;
          x++;
        }
        break;
    }
  }
  let answer = 0;
  for (let x = 1; x <= N; x++) {
    for (let y = 1; y <= N; y++) {
      answer += xArr[x][y] * yArr[x][y];
    }
  }
  console.log(answer);
});
