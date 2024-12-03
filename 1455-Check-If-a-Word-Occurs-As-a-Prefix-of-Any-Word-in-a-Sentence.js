/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  // Approach 3: Using Built-In Function
  const words = sentence.split(" ");
  const filteredWord = words.filter((word) => word.startsWith(searchWord));
  if (filteredWord.length) {
    const wordIndex = words.indexOf(filteredWord[0]);
    return Number(wordIndex) + 1;
  }
  return -1;
};
