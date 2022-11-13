/*
Problem Statement

Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
*/
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function find_cycle_start(head) {
  let slow = (fast = head);
  let cycLength;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      cycLength = find_cycle_length(fast);
      break;
    }
  }
  return find_starter(slow, cycLength);
}
function find_cycle_length(head) {
  let curr = head;
  let cycLength;
  while (curr) {
    curr = curr.next;
    cycLength++;
    if (curr === head) {
      return cycLength;
    }
  }
}
function find_starter(head, leng) {
  let start;
  let curr = head;
  while (leng >= 0) {
    curr = curr.next;
    leng--;
  }
  console.log(curr);
  let slow = (fast = head);
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) return slow;
  }
}
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);
