/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  if (n === 1) return Math.min(...matrix[0]);

  let currRow = [...matrix[0]];
  let prevRow = [];
  for (let i = 1; i < n; i++) {
    prevRow = currRow;
    currRow = [];
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        currRow[j] = matrix[i][j] + Math.min(prevRow[j], prevRow[j + 1]);
      } else if (j === n - 1) {
        currRow[j] = matrix[i][j] + Math.min(prevRow[j - 1], prevRow[j]);
      } else {
        currRow[j] = matrix[i][j] + Math.min(prevRow[j - 1], prevRow[j], prevRow[j + 1]);
      }
    }
  }

  return Math.min(...currRow);
};