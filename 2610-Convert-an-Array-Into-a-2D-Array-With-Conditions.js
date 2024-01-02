/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  let result = [];

  for (const num of nums) {
    let present = false
    for (const row of result) {
      if (!row.includes(num)) {
        row.push(num);
        present = true;
        break;
      }
    }
    if (!present) {
      result.push([num]);
    }
  }
  return result;
};