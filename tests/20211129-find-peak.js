// https://leetcode.com/explore/learn/card/binary-search/126/template-ii/948/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;

  let left = 0;
  let right = nums.length - 1;
  let mid = 0;

  while (left + 1 < right) {
    mid = left + Math.floor((right - left) / 2);
    // if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) return mid;

    if (nums[mid] < nums[mid + 1]) {
      left = mid;
    } else {
      right = mid;
    }
  }

  if (nums[left] > nums[left + 1] && nums[left - 1] < nums[left]) return left;
  if (nums[right] > nums[right + 1] && nums[right - 1] < nums[right])
    return right;
};
