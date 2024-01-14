/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length != word2.length) return false
  if (word1 == word2) return true

  arr1 = Array(26).fill(0)
  arr2 = Array(26).fill(0)

  for (let i = 0; i < word1.length; i++) {
    arr1[word1.charCodeAt(i) - 97]++
    arr2[word2.charCodeAt(i) - 97]++
  }

  for (let i = 0; i < word1.length; i++) {
    if (arr1[i] > 0 && arr2[i] == 0) return false
    if (arr2[i] > 0 && arr1[i] == 0) return false
  }

  str1 = arr1.sort((a, b) => a - b).join('')
  str2 = arr2.sort((a, b) => a - b).join('')

  if (str1 == word1.length) return false

  return str1 == str2
};