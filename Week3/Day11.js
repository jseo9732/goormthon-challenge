// 문제 11. 통증 (2)
const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', line => {
  input.push(line);
  if (input.length === 2) {
    rl.close();
  }
});

rl.on('close', () => {
  const N = Number(input[0]);
  const [A, B] = input[1].split(' ').map(Number);
  let Bm = parseInt(N / B);
  let answer = -1;
  for (let i = Bm; i >= 0; i--) {
    let temp = N - i * B;
    if (temp % A === 0) {
      answer = i + parseInt(temp / A);
      break;
    }
  }
  console.log(answer);
});
