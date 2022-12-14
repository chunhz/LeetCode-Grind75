/* 383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  let obj = {};
  for (let i of magazine) {
    obj[i] = (obj[i] || 0) + 1;
  }
  for (let j = 0; j < ransomNote.length; j++) {
    if (!obj[ransomNote[j]]) return false;
    obj[ransomNote[j]]--;
  }
  return true;
};
const ransomNote = 'aa';
const magazine = 'aab';
console.log(canConstruct(ransomNote, magazine));
// Output: false
