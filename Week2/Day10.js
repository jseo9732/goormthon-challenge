// 문제 10. GameJam

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const directions = {
  U: [-1, 0],
  D: [1, 0],
  R: [0, 1],
  L: [0, -1],
};

let N;
let goormPos, playerPos;
let goormVisited, playerVisited;
let board = [];

function set_Pos(a) {
  if (a === -1) return N - 1;
  if (a === N) return 0;
  return a;
}

const moveFunc = (pos, visited, score, board) => {
  let [x, y] = pos;
  visited[x][y] = true;
  let flag = true;

  while (flag) {
    let mission = board[x][y];
    let count = parseInt(mission.slice(0, -1));
    let command = mission.slice(-1);

    for (let i = 0; i < count; i++) {
      x += directions[command][0];
      y += directions[command][1];
      x = set_Pos(x);
      y = set_Pos(y);
      if (!visited[x][y]) {
        visited[x][y] = true;
        score += 1;
      } else {
        flag = false;
        break;
      }
    }
  }
  return score;
};

let input = [];
rl.on('line', line => {
  input.push(line);
  N = Number(input[0]);
  if (input.length === N + 3) {
    rl.close();
  }
});

rl.on('close', () => {
  goormPos = input[1].split(' ').map(num => Number(num) - 1);
  goormVisited = Array.from(Array(N), () => new Array(N).fill(false));
  playerPos = input[2].split(' ').map(num => Number(num) - 1);
  playerVisited = Array.from(Array(N), () => new Array(N).fill(false));

  for (let i = 3; i < N + 3; i++) {
    board.push(input[i].split(' '));
  }

  const goormScore = moveFunc(goormPos, goormVisited, 1, board);
  const playerScore = moveFunc(playerPos, playerVisited, 1, board);

  if (goormScore > playerScore) {
    console.log('goorm ' + goormScore);
  } else if (goormScore < playerScore) {
    console.log('player ' + playerScore);
  }
  process.exit();
});
