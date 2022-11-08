/*
Problem Statement

Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters, it will have n!n! permutations.

Example 1:

Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.
Example 2:

Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.
Example 3:

Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.
String="oidbcaf", Pattern="abc"
*/
function find_permutation(str, pattern) {
	let obj = {}; // to store permutations of all patterns
	let start = 0;
	for (let i = 0; i < pattern.length; i++) {
		if (!obj[pattern[i]]) {
			obj[pattern[i]] = 0;
		}
		obj[pattern[i]] += 1;
	}
	// console.log('obj in pattern', obj);
	let matched = 0;
	for (let i = 0; i < str.length; i++) {
		if (obj[str[i]]) {
			obj[str[i]] -= 1;
			if (obj[str[i]] === 0) matched++;
		}

		// if (i > pattern.length) {
		// 	if (obj[str[start]]) obj[str[start]] += 1;
		// 	// i
		// }
		if (matched === Object.keys(obj).length) return true;
		// if going out of size K
		if (i >= pattern.length - 1) {
			leftChar = str[start];
			start += 1;
			// console.log('left chart ', leftChar, obj[leftChar]);
			if (obj[leftChar] !== undefined) {
				if (obj[leftChar] === 0) {
					matched -= 1;
				}
				obj[leftChar] += 1;
			}
		}
		console.log(obj);
	}

	return false;
}
console.log(find_permutation('odicf', 'dc')); //false
console.log(find_permutation('oidbcaf', 'abc')); //true
