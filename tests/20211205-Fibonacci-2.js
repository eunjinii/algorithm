// https://leetcode.com/explore/learn/card/recursion-i/255/recursion-memoization/1661/
// Fibonacci Number
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let array = new Array(n).fill(0);
  array[0] = 0;
  array[1] = 1;

  for (let i = 2; i <= n; i++) {
    array[i] = array[i - 2] + array[i - 1];
  }

  return array[n];
};
