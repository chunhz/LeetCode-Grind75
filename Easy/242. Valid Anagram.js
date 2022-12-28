/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // store all characters from str1, s into a hash map.
  let smap = {};
  for (const character of s) {
    if (!smap[character]) {
      smap[character] = 1;
    } else smap[character] += 1;
  }
  for (const char of t) {
    if (!smap[char] || smap[char] === 0) return false;
    else smap[char]--;
  }
  if (s.length !== t.length) return false;
  return true;
};
