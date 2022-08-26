/*Given an integer array nums, return true if any value appears at 
least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let obj = {}
    let count = 1;
    for(let i of nums){
        if(!obj[i]){
            obj[i] = count
        } else{
            return true
        }
    }
    return false;
};