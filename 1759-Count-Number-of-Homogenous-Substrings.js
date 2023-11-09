/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
  const mod = 1000000007;
  let count = 0;
  let consecutiveCount = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      consecutiveCount++;
    } else {
      count = (count + (consecutiveCount * (consecutiveCount + 1) / 2)) % mod;
      consecutiveCount = 1;
    }
  } count = (count + (consecutiveCount * (consecutiveCount + 1) / 2)) % mod;

  return count;
};