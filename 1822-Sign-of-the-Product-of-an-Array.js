/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let negativeNumCount = false

  for (let num of nums) {
    if (num === 0) return 0
    if (num < 0) negativeNumCount += 1
  }

  if (negativeNumCount % 2 === 0) return 1
  else return -1
};