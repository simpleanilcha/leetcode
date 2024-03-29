/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let ans = -1;

  for (let left = 0; left < s.length; left++) {
    for (let right = left + 1; right < s.length; right++) {
      if (s[left] === s[right]) {
        ans = Math.max(ans, right - left - 1);
      }
    }
  }

  return ans;
};