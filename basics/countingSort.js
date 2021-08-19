// 크기가 6 이하인 자연수를 오름차순으로 정렬하기
const array = [
  3, 1, 2, 5, 4, 5, 6, 1, 3, 5, 5, 4, 6, 4, 6, 1, 2, 4, 1, 2, 3, 4, 1, 6, 5,
];

const countingSort = (array) => {
  // 주어진 최대 크기대로의 길이를 가지는 배열에 원소 0 넣어줌
  let countArray = [...Array(6)].fill(0);

  // 입력값 돌면서 countArray를 1씩 올려줌
  array.forEach((num) => countArray[num - 1]++);
  // [5,4,4,5,5,4]

  let result = [];

  // 차례로 출력해줌
  for (let i = 0; i < countArray.length; i++) {
    const temp = [...Array(countArray[i])].fill(i);
    result = [...result, ...temp];
  }

  return result;
};

console.time();
console.log(countingSort(array));
console.timeEnd(); // 8ms
