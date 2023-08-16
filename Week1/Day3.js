// 문제 3. 합 계산기

const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
  if (input.length === 1 + Number(input[0])) {
    rl.close();
  }
});

rl.on("close", () => {
  const T = Number(input[0]);
  let sum = 0;

  for (let i = 1; i < 1 + T; i++) {
    let [num1, sign, num2] = input[i].split(" ");
    num1 = Number(num1);
    num2 = Number(num2);
    switch (sign) {
      case "+":
        sum += num1 + num2;
        break;
      case "-":
        sum += num1 - num2;
        break;
      case "*":
        sum += num1 * num2;
        break;
      case "/":
        sum += parseInt(num1 / num2);
        break;
    }
  }
  console.log(sum);
});
