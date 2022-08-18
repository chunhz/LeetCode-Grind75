/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var runningSum = function(nums) {
  let newArr = []
  let myObj = {}
  for(let i in nums){
    console.log(myObj[1])
    if( myObj[i-1] !== undefined){
      newArr.push(myObj[i-1]+nums[i])
      myObj[i] = nums[i] // pushing nums into myObj 
    }
      
    else {
      newArr.push(nums[i])
      myObj[i] = nums[i] // pushing nums into myObj 
    }
    
  }
  return newArr
}

console.log(runningSum([1,2,3,4]))