// https://leetcode.com/explore/learn/card/recursion-i/255/recursion-memoization/1661/
// Fibonacci Number
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let cache = {};
  const recur = (n) => {
    let result;
    if (Object.keys(cache).includes(n)) {
      return cache.n;
    }

    if (n < 2) {
      result = n;
    } else {
      result = recur(n - 2) + recur(n - 1);
    }
    cache.n = result;
    return result;
  };
  return recur(n);
};
