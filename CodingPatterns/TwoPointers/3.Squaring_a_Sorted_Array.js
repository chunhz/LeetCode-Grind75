// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

// Example 1:

// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]
// Example 2:

// Input: [-3, -1, 0, 1, 2]
// Output: [0, 1, 1, 4, 9]

// Solution

// This is a straightforward question. The only trick is that we can have negative numbers in the input array
// which will make it a bit difficult to generate the output array with squares in sorted order.

// An easier approach could be to first find the index of the first non-negative number in the array.
// After that, we can use Two Pointers to iterate the array.One pointer will move forward to iterate the non - negative numbers,
// and the other pointer will move backward to iterate the negative numbers.At any step,
// whichever number gives us a bigger square will be added to the output array.
// For the above - mentioned Example - 1, we will do something like this:
// Since the numbers at both ends can give us the largest square,
// an alternate approach could be to use two pointers starting at both ends of the input array.At any step,
// whichever pointer gives us the bigger square, we add it to the result array and move to the next / previous number according to the pointer.
// For the above - mentioned Example - 1, we will do something like this:
// const make_squares = (arr) => {
//   let n = arr.length;
//   let squares = Array(n).fill(0);
//   let highestIdx = n - 1;
//   let left = 0,
//     right = n - 1;
//   // console.log(arr);
//   while (left <= right) {
//     let leftSqr = Math.pow(arr[left], 2);
//     let rightSqr = Math.pow(arr[right], 2);
//     console.log(leftSqr, rightSqr);
//     if (leftSqr > rightSqr) {
//       left++;
//       squares[highestIdx] = leftSqr;
//     } else {
//       squares[highestIdx] = rightSqr;
//       right--;
//     }
//     highestIdx--;
//   }
//   return squares;
// };
const make_squares = (arr) => {
  let n = arr.length;
  const squares = Array(n).fill(0);
  let highestIdx = n - 1;
  let left = 0,
    right = n - 1;
  while (left <= right) {
    const leftSqr = Math.pow(arr[left], 2);
    const rightSqr = Math.pow(arr[right], 2);
    if (leftSqr > rightSqr) {
      squares[highestIdx] = leftSqr;
      left++;
    } else {
      squares[highestIdx] = rightSqr;
      right--;
    }
    highestIdx--;
  }
  return squares;
};
console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);
