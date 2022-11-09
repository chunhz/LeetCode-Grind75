/*
Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water), count the number of islands in it.

An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water).
Each cell is considered connected to other cells horizontally or vertically (not diagonally).

Example 1

Input: matrix = 0 1 1 1 0 
                0 0 0 1 1
                0 1 1 1 0
                0 1 1 0 0
                0 0 0 0 0


Output: 1
Explanation: The matrix has only one island. See the highlighted cells below.
*/
function count_islands_BFS(matrix) {
  let cols = matrix[0].length;
  let rows = matrix.length;
  let ans = 0;
  // console.log(cols);
  // console.log(rows);
  for (let i = 0; i < rows; i++) {
    // console.log('i', i);
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        ans++;
        visit_island(matrix, i, j);
      }
    }
  }
  return ans;
}
const visit_island = (matrix, x, y) => {
  if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) return;
  if (matrix[x][y] === 0) return;
  matrix[x][y] = 0;
  visit_island(matrix, x - 1, y);
  visit_island(matrix, x + 1, y);
  visit_island(matrix, x, y - 1);
  visit_island(matrix, x, y + 1);
};
console.log(
  count_islands_BFS([
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ]),
); //
console.log(
  count_islands_BFS([
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ]),
);
