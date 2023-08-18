// 문제 5. 이진수 정렬

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
  const [N, K] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);

  arr.sort((a, b) => b - a);
  arr.sort(
    (a, b) =>
      b.toString(2).match(/1/g).length - a.toString(2).match(/1/g).length
  );
  console.log(arr[K - 1]);
});
