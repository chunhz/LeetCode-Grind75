/*
Problem Statement

Given a string, find the length of the longest substring, which has all distinct characters.

 Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring with distinct characters is "abc".
Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring with distinct characters is "ab".
Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings with distinct characters are "abc" & "cde".
*/
function non_repeat_substring(str) {
	let obj = {};
	let maxLength = Number.MIN_SAFE_INTEGER;
	let start = 0;
	for (let i = 0; i < str.length; i++) {
		if (!obj[str[i]]) {
			obj[str[i]] = str[i];
		} else {
			for (let i of Object.keys(obj)) {
				delete obj[i];
			}
			obj[str[i]] = str[i];
		}
		let currLength = Object.keys(obj).length;
		maxLength = Math.max(maxLength, currLength);
	}
	console.log('curr obj', obj);
	// let currLength = Object.keys(obj).length;
	// maxLength = Math.max(maxLength, currLength);
	return maxLength;
}
console.log(non_repeat_substring('aabccbb')); //3
console.log(non_repeat_substring('abbbb')); //2
console.log(non_repeat_substring('abccde')); //3
console.log(non_repeat_substring('abccdef')); //4
