/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let result = [];
  result[0] = 1;

  for (let i = 1; i <= rowIndex; i++) {
    result[i] = 1;
    for (j = i - 1; j > 0; j--) {
      result[j] = result[j] + result[j - 1];
    }
  }

  return result;
};