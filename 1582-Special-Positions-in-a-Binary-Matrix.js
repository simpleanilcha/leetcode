/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  function getColumnSum(colIdx) {
    return mat.reduce((sum, row) => sum + row[colIdx], 0);
  }

  let special = 0;
  for (let row of mat) {
    if (row.reduce((acc, val) => acc + val, 0) === 1) {
      const colIdx = row.indexOf(1);
      special += getColumnSum(colIdx) === 1;
    }
  }

  return special;
};