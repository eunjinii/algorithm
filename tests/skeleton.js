const fs = require('fs');
const input = fs.readFileSync('./boj-1181-input.txt').toString().split('\n');

const solution = (input) => {
  return input;
};

console.time();
console.log(solution(input));
console.timeEnd();
