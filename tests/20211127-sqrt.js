// https://leetcode.com/explore/learn/card/binary-search/125/template-i/951/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) return x;

  let low = 1;
  let high = x / 2;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (mid * mid > x) return mid - 1;

  return mid;
};
