/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  return helper(n, k - 1);

  function helper(n, k) {
    if (n === 1) {
      return 0;
    }

    const parent = helper(n - 1, k >> 1);
    if (parent === 0) {
      return k & 1;
    } else {
      return (k & 1) ^ 1;
    }
  }
};