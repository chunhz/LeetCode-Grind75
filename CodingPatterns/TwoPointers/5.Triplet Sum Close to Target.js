/*Problem Statement

Given an array of unsorted numbers and a target number,
find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet.
If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.
Example 4:

Input: [0, 0, 1, 1, 2, 6], target=5
Output: 4
Explanation: There are two triplets with distance '1' from target: [1, 1, 2] & [0,0, 6]. 
Between these two triplets, the correct answer will be [1, 1, 2] as it has a sum '4' which is less than the sum of the other triplet which is '6'.
This is because of the following requirement: 'If there are more than one such triplet, 
return the sum of the triplet with the smallest sum.'

Solution

This problem follows the Two Pointers pattern and is quite similar to Triplet Sum to Zero.

We can follow a similar approach to iterate through the array,
taking one number at a time. At every step, 
we will save the difference between the triplet and the target number,
so that in the end, we can return the triplet with the closest sum.
*/
const triplet_sum_close_to_target = (arr, targetSum) => {
  //sort the arr
  arr = arr.sort((a, b) => a - b);
  const triplets = [];
  let smallestDiff = Infinity;
  let ans;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    // if (i > 0 && arr[i] === arr[i - 1]) continue;
    while (left < right) {
      const currSum = arr[i] + arr[left] + arr[right];
      const currDiff = targetSum - currSum;
      if (currDiff === 0) return targetSum;
      smallestDiff = Math.min(Math.abs(smallestDiff), Math.abs(currDiff));
      if (currDiff > 0) left++;
      else right--;
    }
  }
  return targetSum - smallestDiff;
};

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2)); //1
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1)); //0
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100)); //3
console.log(triplet_sum_close_to_target([6, 0, 1, 1, 2, 0], 5)); //4
