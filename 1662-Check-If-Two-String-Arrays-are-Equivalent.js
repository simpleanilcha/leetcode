/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let w1 = word1.join("");
  let w2 = word2.join("");

  if (w1 === w2) {
    return true;
  }
  else {
    return false;
  }
};