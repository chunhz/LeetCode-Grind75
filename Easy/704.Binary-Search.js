/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
You must write an algorithm with O(log n) runtime complexity.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target, low = 0, high = nums.length - 1) {
	let mid = low + Math.floor((high - low) / 2);

	if (low > high) return -1;
	if (nums[mid] === target) return mid;
	if (target < nums[mid]) return search(nums, target, low, (high = mid - 1));
	else return search(nums, target, mid + 1, high);
};
const nums = [-1, 0, 3, 5, 9, 12],
	target = 9;
console.log(search(nums, target)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2));
