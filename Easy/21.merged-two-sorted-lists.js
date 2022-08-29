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
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var mergeTwoLists = function (list1, list2) {
  // initiate a dummy list node
  let dummy = new ListNode(0)
  // copying the head of the dummy node
  let dummyHead = dummy

  
  while (list1 != null && list2 != null) {
    // comparing the values btw list1 & 2
      if(list1.val < list2.val){
        dummy.next = list1
        //traversing list1
        list1 = list1.next 
      }
      else {
        dummy.next = list2
        // traversing list2
        list2 = list2.next
      }
    // dummy now pointing to the next element in dummy
    dummy = dummy.next  
  }   
  //if ran out of list1, combine list 2 onto the dummy list
  if(list1 == undefined)
    dummy.next = list2
  if(list2 == undefined)
    dummy.next = list1
  // return head.next will get rid of 0
  return dummyHead.next;
};
let list1 = [1,2,4];
 let list2 = [1,3,4]
 console.log(mergeTwoLists(list1,list2))