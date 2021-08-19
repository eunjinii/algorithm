const array = [3, 8, 4, 1, 10, 2, 5, 7, 9];

const merge = (left, right) => {
  let temp = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      // shift 해주는 이유는 나중에 왼쪽 오른쪽 중에 한 쪽만 남으면 연산 안하고 바로 합치려고
      temp.push(left.shift());
    } else {
      temp.push(right.shift());
    }
  }
  return [...temp, ...left, ...right];
};

const mergeSort = (array) => {
  let left = [];
  let right = [];

  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  left = array.slice(0, middle);
  right = array.slice(middle);

  // 재귀로 계속 반으로 나눈것을, 거꾸로 다시 올라오면서 merge함
  return merge(mergeSort(left), mergeSort(right));
};

console.time();
console.log(mergeSort(array));
console.timeEnd(); // 8.2ms
