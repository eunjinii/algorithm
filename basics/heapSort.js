const array = [7, 6, 5, 8, 3, 5, 9, 1, 6];

const heapSort = (array) => {
  const heapify = (array) => {
    const middleIndex = Math.floor(array.length / 2) - 1;
    //상향식으로 하니까 안돼서 하향식으로 짰더니 바로 됨
    for (let i = middleIndex; i >= 0; i--) {
      if (array[i] < array[i * 2 + 1]) {
        let temp = array[i];
        array[i] = array[i * 2 + 1];
        array[i * 2 + 1] = temp;
      }

      if (array[i] < array[i * 2 + 2]) {
        let temp = array[i];
        array[i] = array[i * 2 + 2];
        array[i * 2 + 2] = temp;
      }
    }

    return array;
  };

  // 이걸 안해준 상태로 계속 루프를 돌리니 안나오지
  array = heapify(array);

  let lastIndex = array.length - 1;
  while (lastIndex >= 0) {
    let temp = array[0];
    array[0] = array[lastIndex];
    array[lastIndex] = temp;

    array = [...heapify(array.slice(0, lastIndex)), ...array.slice(lastIndex)];
    lastIndex--;
  }
  return array;
};

console.log(heapSort(array));
