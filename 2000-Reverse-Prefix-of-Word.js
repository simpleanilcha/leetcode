/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const chIndex = word.indexOf(ch)
  if (chIndex === -1) return word

  const mainstr = word.substring(0, chIndex + 1)
  const reversedStr = mainstr.split('').reverse().join('')
  const remainingStr = word.substring(chIndex + 1)
  return reversedStr + remainingStr
};