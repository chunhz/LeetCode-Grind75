// Problem Statement

// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

// Example 1:

// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// Explanation: There are four unique triplets whose sum is equal to zero.
// Example 2:

// Input: [-5, 2, -1, -2, 3]
// Output: [[-5, 2, 3], [-2, -1, 3]]
// Explanation: There are two unique triplets whose sum is equal to zero.
// Solution

// This problem follows the Two Pointers pattern and shares similarities with Pair with Target Sum.
// A couple of differences are that the input array is not sorted and instead
// of a pair we need to find triplets with a target sum of zero.

// To follow a similar approach, first,
// we will sort the array and then iterate through it taking one number at a time.
// Let’s say during our iteration we are at number ‘X’,
// so we need to find ‘Y’ and ‘Z’ such that X + Y + Z == 0X + Y + Z == 0.
// At this stage, our problem translates into finding a pair whose sum is equal to “-X−X”
// (as from the above equation Y + Z == -XY + Z ==−X).

// Another difference from Pair with Target Sum is that we need to find all the unique triplets.
// To handle this, we have to skip any duplicate number.Since we will be sorting the array,
//  so all the duplicate numbers will be next to each other and are easier to skip.;
const search_triplets = (arr) => {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  const ansArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    find_pairs(arr, -arr[i], i + 1, ansArr);
  }

  return ansArr;
};

const find_pairs = (arr, targetSum, left, ansArr) => {
  console.log('target sum', arr[left]);
  let right = arr.length - 1;
  while (left < right) {
    const currSum = arr[left] + arr[right];
    if (currSum === targetSum) {
      // make arr[i] = arr[left] + arr[right] and push into
      ansArr.push([-targetSum, arr[left], arr[right]]);
      left++;
      right--;

      //if arr[left] has duplicate, skip
      while (left < right && arr[left] === arr[left - 1]) {
        left++;
      }
      //if arr[right] has duplicate, skip
      while (left < right && arr[right] === arr[right + 1]) {
        right--;
      }
    } else if (targetSum > currSum) {
      left++;
    } else {
      right--;
    }
  }
};

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));
