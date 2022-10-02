/* Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  // adding each element in behind, compare the previous subarray
  let largest = Number.MIN_SAFE_INTEGER;
  console.log(largest);
  let sum = 0;
  console.log(Math.max(sum, largest));
  for (const i of nums) {
    if (sum < 0 || i > sum) sum = 0;
    sum += i;
    largest = Math.max(sum, largest);
  }

  return largest;
};

// Input:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6
