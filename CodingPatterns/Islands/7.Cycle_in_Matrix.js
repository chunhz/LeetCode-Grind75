// Cycle in a Matrix (medium)
// Problem Statement

// You are given a 2D matrix containing different characters, you need to find if there exists any cycle consisting of the same character in the matrix.

// A cycle is a path in the matrix that starts and ends at the same cell and has four  or more cells. From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), if it has the same character value of the current cell.

// Write a function to find if the matrix has a cycle.

// Example 1
// Input: matrix = ['a', 'a', 'a', 'a'],
//                 ['b', 'a', 'c', 'a'],
//                 ['b', 'a', 'c', 'a'],
//                 ['b', 'a', 'a', 'a'],

// Output: true
// Explanation: The given matrix has a cycle as shown below:

// Example 2

// Input: matrix =['a', 'a', 'a', 'a'],
//                ['a', 'b', 'b', 'a'],
//                ['a', 'b', 'a', 'a'],
//                ['a', 'a', 'a', 'c'],

// Output: true
// Explanation: The given matrix has one cycle as shown below:
const find_cycle_DFS = (matrix) => {
  let rows = matrix.length;
  let cols = matrix[0].length;
  const visited = Array(rows)
    .fill(false)
    .map(() => Array(cols).fill(false));
  // console.log(visited);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let currentLetter = matrix[i][j];

      if (visit_island(matrix, i, j, currentLetter, visited)) return true;
    }
  }
  return false;
};
const visit_island = (matrix, x, y, currentLetter, visited) => {
  if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) {
    return false;
  }
  if (matrix[x][y] !== currentLetter) {
    visited[x][y] = false;
    return false;
  }
  // console.log(currentLetter, matrix[x][y]);
  // console.log('visited', visited);
  if (visited[x][y]) return true;
  if (matrix[x][y] === currentLetter) visited[x][y] = true;
  visit_island(matrix, x + 1, y, currentLetter, visited);
  visit_island(matrix, x - 1, y, currentLetter, visited);
  visit_island(matrix, x, y + 1, currentLetter, visited);
  visit_island(matrix, x, y - 1, currentLetter, visited);
  return false;
};
console.log(
  find_cycle_DFS([
    ['a', 'a', 'a', 'a'],
    ['b', 'a', 'c', 'a'],
    ['b', 'a', 'c', 'a'],
    ['b', 'a', 'a', 'a'],
  ]),
); // true

console.log(
  find_cycle_DFS([
    ['a', 'a', 'a', 'a'],
    ['a', 'b', 'b', 'a'],
    ['a', 'b', 'a', 'a'],
    ['a', 'a', 'a', 'c'],
  ]),
); // true

console.log(
  find_cycle_DFS([
    ['a', 'b', 'e', 'b'],
    ['b', 'b', 'b', 'b'],
    ['b', 'c', 'c', 'd'],
    ['c', 'c', 'd', 'd'],
  ]),
); // false
