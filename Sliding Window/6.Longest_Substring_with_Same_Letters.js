/*
Problem Statement

Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

Example 1:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
Example 2:

Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
Example 3:

Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
*/
function length_of_longest_substring(str, k) {
	let obj = {};
	let maxLength = Number.MIN_SAFE_INTEGER;
	// let count = 0;
	let usedK = 0;
	let start = 0;
	let highFreqChar = Number.MIN_SAFE_INTEGER;
	for (let i = 0; i < str.length; i++) {
		if (!obj[str[i]]) {
			obj[str[i]] = 0;
		}
		obj[str[i]] += 1;
		highFreqChar = Math.max(obj[str[i]], highFreqChar);
		// console.log('highFreqChar', highFreqChar);
		if (i - start + 1 - highFreqChar > k) {
			obj[str[start]] -= 1;
			start++;
		}
		maxLength = Math.max(maxLength, i - start + 1);
	}

	// console.log('used k', usedK);
	// console.log('obj', obj);
	// console.log('max length', maxLength);

	return maxLength;
}
console.log(length_of_longest_substring('aabccbb', 2)); //5
console.log(length_of_longest_substring('abbcb', 1)); //4
console.log(length_of_longest_substring('abccde', 1)); //3
console.log(length_of_longest_substring('abcbbbab', 1)); //5
