// https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1440/
// Reserse String
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  let mid = Math.floor((left + right) / 2);

  const recursive = (arr) => {
    if (left > mid) return;

    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;

    recursive(arr);
  };

  recursive(s);
  return s;
};
