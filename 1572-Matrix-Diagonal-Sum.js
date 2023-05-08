/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const primaryArr = mat.map((num, i) => num[i])
  const secondaryArr = mat.map((num, i) => num[mat.length - (i + 1)])

  if (primaryArr.length % 2 !== 0) {
    const MidIndex = Math.floor(primaryArr.length / 2)
    primaryArr.splice(MidIndex, 1)
  }

  const jointArr = primaryArr.concat(secondaryArr)
  return jointArr.reduce((total, curr) => total + curr, 0);
};


// Editorial
/*
var diagonalSum = function(mat) {
  const n = mat.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
      // Add elements from primary diagonal.
      ans += mat[i][i];
      // Add elements from secondary diagonal.
      ans += mat[n - 1 - i][i];
  }
  // If n is odd, subtract the middle element as its added twice.
  if (n % 2 !== 0) {
      ans -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
  }

  return ans;
};
*/