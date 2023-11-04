/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
  let max = 0;
  for (const l of left) max = Math.max(max, l);
  for (const r of right) max = Math.max(max, n - r);
  return max;
};