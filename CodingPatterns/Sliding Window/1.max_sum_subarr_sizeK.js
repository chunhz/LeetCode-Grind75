/*
Given an array of positive numbers and a positive number ‘k’
find the maximum sum of any contiguous subarray of size ‘k’

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
*/
// Brutal Force
// function max_sub_array_of_size_k(k, arr) {
//   let ansMax = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < arr.length - k + 1; i++) {
//     let localMax = 0;
//     // console.log(i);
//     for (let j = i; j < k + i; j++) {
//       // j = index 0-2
//       localMax += arr[j];
//     }
//     if (localMax > ansMax) ansMax = localMax;
//   }
//   return ansMax;
// }

function max_sub_array_of_size_k(k, arr) {
  let ansMax = Number.MIN_SAFE_INTEGER;
  let startIndex = 0;
  let localMax = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(i);
    localMax += arr[i];
    if (i >= k - 1) {
      ansMax = Math.max(ansMax, localMax);
      // once i is greater than k, subtract from localMax
      // for exampe k = 3, once i = 3, subtract arr[0] from localMax
      localMax -= arr[startIndex];
      startIndex++;
    }
  }
  return ansMax;
}
// time complexity: O(n)
// space complexity: O(1)
console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]));
console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]));
