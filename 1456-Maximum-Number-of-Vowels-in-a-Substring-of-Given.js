/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  let count = 0
  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) count++
  }

  let maxCount = count
  for (let i = k; i < s.length; i++) {
    if (vowels.includes(s[i])) maxCount++
    if (vowels.includes(s[i - k])) maxCount--
    if (count < maxCount) count = maxCount
  }

  return count
};