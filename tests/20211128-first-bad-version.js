// https://leetcode.com/explore/learn/card/binary-search/126/template-ii/947/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (n === 1) return 1;

    let left = 1;
    let right = n;
    let mid = 0;

    while (left < right) {
      mid = left + Math.floor((right - left) / 2);
      if (!isBadVersion(mid - 1) && isBadVersion(mid)) return mid;

      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };
};
