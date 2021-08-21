const fs = require('fs');
const input = fs.readFileSync('./boj-1181-input.txt').toString().split('\n');

// 값들의 length 순으로 최대힙정렬
const heapify = (array) => {
  const middleIndex = Math.floor(array.length / 2) - 1;

  if (array.length <= 1) {
    return array;
  }

  for (let i = middleIndex; i >= 0; i--) {
    if (array[i].length < array[2 * i + 1].length) {
      let temp = array[i];
      array[i] = array[2 * i + 1];
      array[2 * i + 1] = temp;
    }

    // 3시간헤맨거.. array[2 * i + 2] 가 있는 경우만 로직 타게 한다. 아 돌겠네 이 쉬운걸
    // array[2 * i + 1]는 항상 있음.
    if (array[2 * i + 2] && array[i].length < array[2 * i + 2].length) {
      let temp = array[i];
      array[i] = array[2 * i + 2];
      array[2 * i + 2] = temp;
    }
  }
  return array;
};

const solution = (input) => {
  let array = input.slice(1);
  let lastIndex = array.length - 1;
  array = heapify(array);

  while (lastIndex >= 0) {
    let temp = array[0];
    array[0] = array[lastIndex];
    array[lastIndex] = temp;

    array = [...heapify(array.slice(0, lastIndex)), ...array.slice(lastIndex)];
    lastIndex--;
  }

  let count = 1;
  for (let i = 0; i < array.length - 1; i++) {
    // 지금거랑 다음거랑 자릿수 같으면 같은거 카운트 + 1
    if (array[i + 1] && array[i].length === array[i + 1].length) {
      count++;
      continue;
    }

    array = [
      ...array.slice(0, i - count + 1),
      ...array.slice(i - count + 1, i + 1).sort(),
      ...array.slice(i + 1),
    ];
    count = 1;
  }

  return array;
};

console.time();
console.log(solution(input));
console.timeEnd(); // 7.2 ~7.6ms
