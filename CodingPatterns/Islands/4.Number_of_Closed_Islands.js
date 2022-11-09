/*
Number of Closed Islands (easy)

Problem Statement

You are given a 2D matrix containing only 1s (land) and 0s (water).

An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered connected to other cells horizontally or vertically (not diagonally).

A closed island is an island that is totally surrounded by 0s (i.e., water). This means all horizontally and vertically connected cells of a closed island are water. This also means that, by definition, a closed island can't touch an edge (as then the edge cells are not connected to any water cell). 

Write a function to find the number of closed islands in the given matrix.

Example 1

Input: matrix = [1, 1, 0, 0, 0],
		            [0, 1, 0, 0, 0],
		            [0, 0, 1, 1, 0],
		            [0, 1, 1, 0, 0],
		            [0, 0, 0, 0, 0],

Output: 1
Explanation: The given matrix has two islands, but only the highlighted island is a closed island. The other island is touching the boundary that's why is is not considered a closed island.

Example 2

Input: matrix = [0, 0, 0, 0],
		            [0, 1, 0, 0],
		            [0, 1, 0, 0],
		            [0, 0, 1, 0],
		            [0, 0, 0, 0],

Output: 2
Explanation: The given matrix has two islands and both of them are closed islands.
*/
const count_closed_islands_DFS = (matrix) => {
	let rows = matrix.length;
	let cols = matrix[0].length;
	let count = 0;
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (matrix[i][j] === 1) {
				visit_island(matrix, i, j);
				count++;
			}
		}
	}
	return count;
};
const visit_island = (matrix, x, y) => {
	if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) return;
	if (matrix[x][y] === 0) return;
	matrix[x][y] = 0;
	visit_island(matrix, x + 1, y);
	visit_island(matrix, x - 1, y);
	visit_island(matrix, x, y + 1);
	visit_island(matrix, x, y - 1);
};
console.log(
	count_closed_islands_DFS([
		[1, 1, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 0, 0, 0],
	]),
);

console.log(
	count_closed_islands_DFS([
		[0, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 0],
	]),
);
