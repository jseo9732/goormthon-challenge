// 문제 8. 통증

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on('line', (line) => {
  input = line;
  rl.close();
});

rl.on('close', () => {
  let N = Number(input);
  const arr = [14, 7, 1];
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (N >= arr[i]) {
      const count = parseInt(N / arr[i]);
      answer += count;
      N -= count * arr[i];
    }
  }
  console.log(answer);
});
