/*Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

var groupAnagrams = function (strs) {
  var hash = {},
    res = [],
    i,
    len;
  for (i = 0, len = strs.length; i < len; i += 1) {
    var str = strs[i],
      key = str.split('').sort().join('');
    if (hash[key]) {
      hash[key].push(str);
    } else {
      hash[key] = [str];
    }
  }
  Object.keys(hash).forEach(function (key) {
    res.push(hash[key]);
  });
  res.sort(function (arr1, arr2) {
    return arr2.length - arr1.length;
  });
  return res;
};
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hash = {},
    ansArr = [];
  for (let i = 0; i < strs.length; i++) {
    let curr = strs[i];
    let key = curr.split('').sort().join('');
    if (hash[key]) {
      hash[key].push(curr);
    } else hash[key] = [curr];
  }

  Object.keys(hash).forEach((key) => {
    ansArr.push(hash[key]);
  });
  ansArr.sort((a, b) => a.length - b.length);
  return ansArr;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); //[["bat"],["nat","tan"],["ate","eat","tea"]]
