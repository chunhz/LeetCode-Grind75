/*
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: 1

*/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');
var minMeetingRooms = function (intervals) {
  // input: nested array
  // output number of rooms needed
  // interate through the intervals array
  // [0, 30], [5, 10] each interation
  // at minimal, we have 1 room.
  // default our returned answer to be 1
  // have nested for loop, when we are at the first element, we take
  // the start time and the end time, compare with the remainings in the array
  // check if the start time of the current element is smaller than the start time of the second element
  // check if the end time of the curr ele is greater then the sec ele
  // if they both satisfied, add 1 to the curr room number
  // return the curr room number

  // 1. sort the schedule
  intervals.sort((a, b) => a[0] - b[0]);
  let finish = new MinPriorityQueue();
  let ans = 0;
  for (let interval of intervals) {
    if (finish.size() === 0) {
      ans++;
    } else {
      if (finish.front().element <= interval[0]) {
        finish.dequeue();
      } else {
        ans++;
      }
    }
    finish.enqueue(interval[1]);
  }
  return ans;
};
console.log(
  minMeetingRooms([
    [7, 10],
    [2, 4],
  ]),
);
