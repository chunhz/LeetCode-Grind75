/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = function (nums) {
  const newArr = [];
  const myObj = {};
  for (const i in nums) {
    console.log(myObj[1]);
    if (myObj[i - 1] !== undefined) {
      newArr.push(myObj[i - 1] + nums[i]);
      myObj[i] = nums[i]; // pushing nums into myObj
    } else {
      newArr.push(nums[i]);
      myObj[i] = nums[i]; // pushing nums into myObj
    }
  }
  return newArr;
};

console.log(runningSum([1, 2, 3, 4]));
