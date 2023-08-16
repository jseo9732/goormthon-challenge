// 문제 1. 운동 중독 플레이어

const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", (line) => {
  input = line;
  rl.close();
});
rl.on("close", () => {
  const [W, R] = input.split(" ").map(Number);
  console.log(parseInt(W * (1 + R / 30)));
});
