// https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1681/
// Swap Nodes in Pairs
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
var swapPairs = function (head) {
  if (head == null) return head;
  if (head.next == null) return head;

  let temp = head.next;
  head.next = temp.next;
  temp.next = head;

  head.next = swapPairs(head.next);
  return temp;
};
