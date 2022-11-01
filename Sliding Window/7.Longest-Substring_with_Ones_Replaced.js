/*
Problem Statement

Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Example 1:

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
Example 2:

Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
*/
function length_of_longest_substring(arr, k) {
	let obj = {};
	let maxLength = Number.MIN_SAFE_INTEGER;
	let start = 0;
	for (let i in arr) {
		// console.log('obj origin ', obj);
		if (!obj[arr[i]]) {
			obj[arr[i]] = 0;
		}
		obj[arr[i]] += 1;
		if (obj[0] > k) {
			// when ones are exceeding k
			// take temp length
			obj[arr[start]] -= 1;
			start++;
			// console.log(obj);
		}
	}
	tempLength = Object.values(obj)[0];
	let ones = Object.values(obj)[1];
	maxLength = Math.max(maxLength, ones + tempLength);
	// console.log(obj[0], obj[1]);
	return maxLength;
}
console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)); //6
console.log(
	length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3), //9
);
