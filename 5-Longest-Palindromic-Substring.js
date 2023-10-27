/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxLen = 1;
  let strLen = s.length;

  let finalLeftIndex = 0;
  let finalRightIndex = 0;

  let leftIndex;
  let rightIndex;
  let curLen;

  for (var i = 0; i < strLen; i++) {
    // First deal with the case where the palindrome is an odd number
    leftIndex = i - 1;
    rightIndex = i + 1;
    while (leftIndex > -1 && rightIndex < strLen) {
      if (s[leftIndex] === s[rightIndex]) {
        // It's a palindrome, continue to judge
        curLen = rightIndex - leftIndex + 1;
        if (curLen > maxLen) {
          maxLen = curLen;
          finalLeftIndex = leftIndex;
          finalRightIndex = rightIndex;
        }
        leftIndex--;
        rightIndex++;
      } else {
        break;
      }
    }

    // Then handle the case where the palindrome is an even number
    leftIndex = i;
    rightIndex = i + 1;
    while (leftIndex > -1 && rightIndex < strLen) {
      if (s[leftIndex] === s[rightIndex]) {
        curLen = rightIndex - leftIndex + 1;
        if (curLen > maxLen) {
          maxLen = curLen;
          finalLeftIndex = leftIndex;
          finalRightIndex = rightIndex;
        }
        leftIndex--;
        rightIndex++;
      } else {
        break;
      }
    }
  }
  return s.substr(finalLeftIndex, maxLen);
};