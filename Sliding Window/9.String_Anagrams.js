/*
Problem Statement

Given a string and a pattern, find all anagrams of the pattern in the given string.

Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get N!N! permutations (or anagrams) of a string having NN characters. For example, here are the six anagrams of the string “abc”:

abc
acb
bac
bca
cab
cba
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

Example 1:
Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

Example 2:
Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

*/
function find_string_anagrams(str, pattern) {
	let obj = {};
	let start = 0;
	let ansArr = [];
	let matched = 0;
	for (let i of pattern) {
		if (!obj[i]) obj[i] = 0;
		obj[i] += 1;
	}
	console.log('pattern obj', obj);
	for (let i = 0; i < str.length; i++) {
		// if (obj[str[i]]) {
		// 	console.log('in obj', str[i]);
		// }
		const rightChar = str[start];
		if (rightChar in obj) {
			obj[rightChar] -= 1;
			if (obj[rightChar] === 0) matched += 1;
		}
		if (matched === Object.keys(obj).length) {
			ansArr.push(start);
		}
		if (i >= pattern.length - 1) {
			let leftChar = str[start];
			start++;
			if (leftChar in obj) {
				if (obj[leftChar] === 0) {
					matched--;
				}
				obj[leftChar] += 1;
			}
		}
	}
	console.log('obj', obj);
	return ansArr;
}

console.log(find_string_anagrams('ppqp', 'pq')); // [1,2]
