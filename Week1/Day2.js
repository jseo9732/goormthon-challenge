// 문제 2. 프로젝트 매니징

const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2 + Number(input[0])) {
    rl.close();
  }
});

rl.on("close", () => {
  const N = Number(input[0]);
  const [T, M] = input[1].split(" ").map(Number);
  let time = T * 60 + M;
  for (let i = 2; i < 2 + N; i++) {
    time += Number(input[i]);
  }
  const newT = parseInt((time % 1440) / 60);
  const newM = time % 60;
  console.log(newT, newM);
});
