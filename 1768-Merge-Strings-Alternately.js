/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = ''
  const word1Arr = word1.split('')
  const word2Arr = word2.split('')
  let shortWord = ''
  if (word1Arr.length < word2Arr.length) shortWord = 'one'
  else if (word1Arr.length > word2Arr.length) shortWord = 'two'
  else shortWord = ''

  for (let i = 0; i < word1Arr.length; i++) {
    for (let j = 0; j < word2Arr.length; j++) {
      if (i == j) {
        result += word1Arr[i]
        result += word2Arr[j]
      }
    }
  }

  let tail = ''
  if (shortWord === 'one') tail = word2Arr.slice(word1Arr.length).join('')
  else if (shortWord === 'two') tail = word1Arr.slice(word2Arr.length).join('')

  return result + tail
};