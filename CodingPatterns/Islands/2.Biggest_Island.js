/*
Problem Statement

Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water), find the biggest island in it. Write a function to return the area of the biggest island. 

An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered connected to other cells horizontally or vertically (not diagonally).

Example 1

Input: matrix = [1, 1, 1, 0, 0],
                [0, 1, 0, 0, 1],
		            [0, 0, 1, 1, 0],
		            [0, 1, 1, 0, 0],
		            [0, 0, 1, 0, 0],



Output: 5
Explanation: The matrix has three islands. The biggest island has 5 cells .

*/
const max_area_islands_DFS = (matrix) => {
	let rows = matrix.length;
	let cols = matrix[0].length;
	let ans = -Infinity;
	for (let i = 0; i < rows; i++) {
		// let count = 0;
		for (let j = 0; j < cols; j++) {
			// console.log(matrix[i][j]);
			if (matrix[i][j] === 1) {
				ans = Math.max(ans, visit_island(matrix, i, j));
			}
		}
	}
	return ans;
};

const visit_island = (matrix, x, y) => {
	if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) return 0;
	if (matrix[x][y] === 0) return 0;
	matrix[x][y] = 0;

	let count = 1;
	count += visit_island(matrix, x + 1, y);
	count += visit_island(matrix, x - 1, y);
	count += visit_island(matrix, x, y - 1);
	count += visit_island(matrix, x, y + 1);
	return count;
};
console.log(
	max_area_islands_DFS([
		[1, 1, 1, 0, 0],
		[0, 1, 0, 0, 1],
		[0, 0, 1, 1, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 1, 0, 0],
	]),
);
