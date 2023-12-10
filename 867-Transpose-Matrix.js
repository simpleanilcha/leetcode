/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;

  const ans = [];

  for (let a = 0; a < col; a++) {
    const temp = [];
    for (let b = 0; b < row; b++) {
      temp.push(matrix[b][a]);
    }
    ans.push(temp);
  }
  return ans;
};