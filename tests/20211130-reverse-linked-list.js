// https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/2378/
// Reverse Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head, prev = null) {
  if (!head) return prev;

  let temp = head.next;
  head.next = prev;
  return reverseList(temp, head);
};
