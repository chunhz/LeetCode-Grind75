// Number of Distinct Islands (medium)
// Problem Statement

// You are given a 2D matrix containing only 1s (land) and 0s (water).

// An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered connected to other cells horizontally or vertically (not diagonally).

// Two islands are considered the same if and only if they can be translated (not rotated or reflected) to equal each other.

// Write a function to find the number of distinct islands in the given matrix.

// Example 1

// Input: matrix = [1, 1, 0, 1, 1],
//                 [1, 1, 0, 1, 1],
//                 [0, 0, 0, 0, 0],
//                 [0, 1, 1, 0, 1],
//                 [0, 1, 1, 0, 1],

// Output: 2
// Explanation: There are four islands in the given matrix, but three of them are the same; hence, there are only two distinct islands.

// Example 2

// Input: matrix = [1, 1, 0, 1],
//                 [0, 1, 1, 0],
//                 [0, 0, 0, 0],
//                 [1, 1, 0, 0],
//                 [0, 1, 1, 0],

// Output: 2
// Explanation: There are three islands in the given matrix, but two of them are the same; hence, there are only two distinct islands.
const find_distinct_islands_DFS = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let islandCount = 0;
  let islandMap = {};
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        let islandArea = visit_island(matrix, i, j);
        if (!islandMap[islandArea]) {
          console.log('islandArea', islandArea);
          islandCount++;
          islandMap[islandArea] = islandArea;
        }
      }
    }
  }
  return islandCount;
};
const visit_island = (matrix, x, y) => {
  if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) return 1;
  if (matrix[x][y] === 0) return 1;
  matrix[x][y] = 0;
  let islandArea = 0;
  islandArea += visit_island(matrix, x + 1, y);
  islandArea += visit_island(matrix, x - 1, y);
  islandArea += visit_island(matrix, x, y + 1);
  islandArea += visit_island(matrix, x, y - 1);
  return islandArea;
};
console.log(
  find_distinct_islands_DFS([
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1],
    [0, 1, 1, 0, 1],
  ]),
); //2

console.log(
  find_distinct_islands_DFS([
    [1, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 0],
  ]), //2
);
