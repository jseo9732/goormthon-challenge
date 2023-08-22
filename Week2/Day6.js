// 문제 6. 문자열 나누기

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    rl.close();
  }
});

rl.on('close', () => {
  const N = Number(input[0]);
  const S = input[1];

  let wordList = [];
  let score = new Set();

  for (let i = 1; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const first = S.substring(0, i);
      const second = S.substring(i, j);
      const third = S.substring(j);
      wordList.push([first, second, third]);
      score.add(first);
      score.add(second);
      score.add(third);
    }
  }

  const tempScoreList = [...score].sort();
  const wordScore = {};

  for (let i = 0; i < tempScoreList.length; i++) {
    wordScore[tempScoreList[i]] = i + 1;
  }

  let maxScore = -1;
  for (const words of wordList) {
    let tempScore = 0;
    for (const word of words) {
      tempScore += wordScore[word];
    }
    maxScore = Math.max(maxScore, tempScore);
  }
  console.log(maxScore);
});
