// https://leetcode.com/explore/learn/card/binary-search/125/template-i/951/
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  if (n === 1) return n;

  let low = 1;
  let high = n;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (guess(mid) === 0) return mid;
    if (guess(mid) > 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return mid;
};
