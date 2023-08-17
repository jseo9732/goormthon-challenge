// 문제 4. 완벽한 햄버거 만들기

const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const N = Number(input[0]);
  const flavor = input[1].split(" ").map(Number);
  let flag = 1;

  const maxIndex = flavor.indexOf(Math.max(...flavor));
  let i = maxIndex - 1;
  while (i > 0) {
    if (flavor[i] < flavor[i - 1]) {
      flag = 0;
      break;
    }
    i--;
  }
  i = maxIndex;
  while (i < N - 1) {
    if (flavor[i] < flavor[i + 1]) {
      flag = 0;
      break;
    }
    i++;
  }

  if (flag) {
    console.log(
      flavor.reduce((a, b) => {
        return a + b;
      })
    );
  } else {
    console.log(0);
  }
});
