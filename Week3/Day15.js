// 문제 15. 과일 구매

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
  const [N, K] = input[0].split(' ').map(Number);
  arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(input[i].split(' ').map(Number));
  }
  arr.sort((a, b) => b[1] - a[1]);
  arr.sort((a, b) => parseInt(b[1] / b[0]) - parseInt(a[1] / a[0]));
  let money = K;
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (money - arr[i][0] >= 0) {
      answer += arr[i][1];
      money -= arr[i][0];
    } else if (money >= 1) {
      for (let j = 0; j < arr[i][0]; j++) {
        if (money !== 0) {
          answer += parseInt(arr[i][1] / arr[i][0]);
          money -= 1;
        }
      }
    }
  }
  console.log(answer);
});
