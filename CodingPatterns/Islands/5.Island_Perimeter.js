/*
Problem Statement

You are given a 2D matrix containing only 1s (land) and 0s (water).

An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered connected to other cells horizontally or vertically (not diagonally).

There are no lakes on the island, so the water inside the island is not connected to the water around it. A cell is a square with a side length of 1.. 

The given matrix has only one island, write a function to find the perimeter of that island.

Example 1

Input: matrix = [1, 1, 0, 0, 0],
                [0, 1, 0, 0, 0],
                [0, 1, 0, 0, 0],
                [0, 1, 1, 0, 0],
                [0, 0, 0, 0, 0],
	]),



Output: 14
Explanation: The boundary of the island constitute 14 sides.

Example 2

Input: matrix = [0, 0, 0, 0],
		            [0, 1, 0, 0],
		            [0, 1, 0, 0],
		            [0, 1, 1, 0],
		            [0, 1, 0, 0],



Output: 12
Explanation: The boundary of the island constitute 12 sides.
*/
const find_island_perimeter_DFS = (matrix) => {
	let rows = matrix.length;
	let cols = matrix[0].length;
	let perimeter;
	const visited = Array(rows) // Making a new Matrix filled with false;
		.fill(false)
		.map(() => Array(cols).fill(false));

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (matrix[i][j] === 1) {
				return visit_island(matrix, visited, i, j);
			}
		}
	}
};
const visit_island = (matrix, visited, x, y) => {
	if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) return 1;
	if (matrix[x][y] === 0) return 1;
	if (visited[x][y]) return 0;
	visited[x][y] = true;
	let perimeter = 0;
	perimeter += visit_island(matrix, visited, x + 1, y);
	perimeter += visit_island(matrix, visited, x - 1, y);
	perimeter += visit_island(matrix, visited, x, y + 1);
	perimeter += visit_island(matrix, visited, x, y - 1);
	return perimeter;
};
console.log(
	find_island_perimeter_DFS([
		[1, 1, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 1, 0, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 0, 0, 0],
	]),
);

console.log(
	find_island_perimeter_DFS([
		[0, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 1, 0],
		[0, 1, 0, 0],
	]),
);
