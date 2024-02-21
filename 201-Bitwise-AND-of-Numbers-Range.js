/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
  if (left === right) return left

  const leftStr = left.toString(2)
  const rightStr = right.toString(2)
  const leftStrLen = leftStr.length
  const rightStrLen = rightStr.length

  if (rightStrLen > leftStrLen) return 0

  let i
  for (i = 0; i < leftStrLen; i++) {
    if (leftStr[i] !== rightStr[i]) {
      break;
    }
  }

  const ansStr = leftStr.slice(0, i) + "0".repeat(leftStrLen - i)
  return Number("0b" + ansStr)
};