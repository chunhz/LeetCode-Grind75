/*
Problem Statement

Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.


Solution

Imagine two racers running in a circular racing track. If one racer is faster than the other,
the faster racer is bound to catch up and cross the slower racer from behind. 
We can use this fact to devise an algorithm to determine if a LinkedList has a cycle in it or not.

Imagine we have a slow and a fast pointer to traverse the LinkedList. 
In each iteration, the slow pointer moves one step and the fast pointer moves two steps. 
This gives us two conclusions:

If the LinkedList doesn’t have a cycle in it, the fast pointer will reach
the end of the LinkedList before the slow pointer to reveal that there is no cycle in the LinkedList.
The slow pointer will never be able to catch up to the fast pointer if there is no cycle in the LinkedList.
If the LinkedList has a cycle, the fast pointer enters the cycle first, 
followed by the slow pointer. After this, both pointers will keep moving in the cycle infinitely. 
If at any stage both of these pointers meet, we can conclude that the LinkedList has a cycle in it. 
Let’s analyze if it is possible for the two pointers to meet. 
When the fast pointer is approaching the slow pointer from behind we have two possibilities:

The fast pointer is one step behind the slow pointer.
The fast pointer is two steps behind the slow pointer.
All other distances between the fast and slow pointers will reduce to one of these two possibilities. 
Let’s analyze these scenarios, considering the fast pointer always moves first:

If the fast pointer is one step behind the slow pointer: 
The fast pointer moves two steps and the slow pointer moves one step, and they both meet.
If the fast pointer is two steps behind the slow pointer: 
The fast pointer moves two steps and the slow pointer moves one step. After the moves, 
the fast pointer will be one step behind the slow pointer, which reduces this scenario to the first scenario. 
This means that the two pointers will meet in the next iteration.
*/
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
function has_cycle(head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }
  return false;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);
console.log(`LinkedList has cycle: ${has_cycle(head)}`);
