/*
Longest Substring with K Distinct Characters

Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/
function longest_substring_with_k_distinct(str, k) {
	// initiate a map, to keep the record of characters read
	// keep interate through while putting every element into the map
	// if reach K in sequence, break the for loop
	let count = 0;
	let start = 0;
	const obj = {};
	for (let i = 0; i < str.length; i++) {
		if (!obj[str[i]]) {
			obj[str[i]] = 0;
		}
		obj[str[i]] += 1;
		while (Object.keys(obj).length > k) {
			const startChar = str[start];
			obj[startChar] -= 1;
			if (obj[startChar] === 0) delete obj[startChar];
			start++;
		}
		count = Math.max(count, i - start + 1);
	}
	return count;
}
console.log(longest_substring_with_k_distinct('araaci', 2));
console.log(longest_substring_with_k_distinct('cbbebi', 3));
