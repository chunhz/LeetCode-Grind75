/*
Any image can be represented by a 2D integer array (i.e., a matrix) where each cell represents the pixel value of the image.

Flood fill algorithm takes a starting cell (i.e., a pixel) and a color. The given color is applied to all horizontally and vertically connected cells with the same color as that of the starting cell. Recursively, the algorithm fills cells with the new color until it encounters a cell with a different color than the starting cell. 

Given a matrix, a starting cell, and a color, flood fill the matrix.
      [0, 1, 1, 1, 0],
			[0, 0, 0, 1, 1],
			[0, 1, 1, 1, 0],
			[0, 1, 1, 0, 0],
			[0, 0, 0, 0, 0],
*/
const flood_fill_DFS = (matrix, x, y, newColor) => {
	if (matrix[x][y] !== newColor) {
		visit_island(matrix, x, y, matrix[x][y], newColor);
	}

	return matrix;
};
visit_island = (matrix, x, y, oldColor, newColor) => {
	if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) {
		return;
	}
	if (matrix[x][y] !== oldColor) return;
	matrix[x][y] = newColor;
	visit_island(matrix, x + 1, y, oldColor, newColor);
	visit_island(matrix, x - 1, y, oldColor, newColor);
	visit_island(matrix, x, y + 1, oldColor, newColor);
	visit_island(matrix, x, y - 1, oldColor, newColor);
};
console.log(
	flood_fill_DFS(
		[
			[0, 1, 1, 1, 0],
			[0, 0, 0, 1, 1],
			[0, 1, 1, 1, 0],
			[0, 1, 1, 0, 0],
			[0, 0, 0, 0, 0],
		],
		1,
		3,
		2,
	),
);
console.log(
	flood_fill_DFS(
		[
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 1, 1, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
		],
		3,
		2,
		5,
	),
);
