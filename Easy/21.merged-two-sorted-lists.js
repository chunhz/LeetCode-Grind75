/**
 * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 function ListNode(val, next) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
   }
 var mergeTwoLists = function(list1, list2) {
  // console.log(list1)
  //  let ans;
   const ans = new ListNode(-Infinity);
   // a prev point to save the previously saved node
   let prev = ans;
   while (list1 && list2) {
     // keep comparing list 1 and list 2, if list 1 is smaller, increment list 1 to list1.next.
     if (list1.val <= list2.val) {
      //  console.log(list1)
       
       prev.next = list1
       prev = list1;
       list1 = list1.next;
     } else {
      console.log(list2)
       prev.next = list2
       prev = list2
       list2 = list2.next
    }
   }
   if (!list1) prev.next = list2
   if (!list2) prev.next = list1
    // console.log(new ListNode(-Infinity))
   return dummy.next;
};
let list1 = [1,2,4];
 let list2 = [1,3,4]
 console.log(mergeTwoLists(list1,list2))