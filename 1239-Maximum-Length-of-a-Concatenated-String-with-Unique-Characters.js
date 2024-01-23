/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let res = 0;
  const solve = (index, cur) => {
    if (cur.length !== new Set(cur.split('')).size) {
      return;
    }
    res = Math.max(res, cur.length);
    for (let i = index; i < arr.length; i++) {
      solve(i + 1, `${cur}${arr[i]}`);
    }
  }
  solve(0, '');
  return res;
};