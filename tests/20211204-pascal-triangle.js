/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let row = [];

  row.push(1); // [1]

  for (let i = 1; i <= rowIndex; i++) {
    // 이전 row의 길이보다 1 작은 숫자 만큼 for문을 돈다.
    for (let j = row.length - 1; j > 0; j--) {}

    row[rowIndex][i] = row[rowIndex - 1][i - 1] + row[rowIndex - 1][i];
  }
};
