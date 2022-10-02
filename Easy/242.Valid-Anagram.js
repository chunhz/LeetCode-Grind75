/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length === 1 && s === t) return true;
  if (s.length !== t.length) return false;
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) obj[s[i]] += 1;
    else obj[s[i]] = 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (obj[t[i]]) obj[t[i]] -= 1;
    else return false;
  }
  return true;
};
