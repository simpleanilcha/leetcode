/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  // Step 1: Collect vowels and sort them in descending order
  const vowelsSorted = [...s].filter(c => 'aeiouAEIOU'.includes(c)).sort().reverse();

  // Step 2: Construct the answer string by replacing vowels in sorted order
  let result = '';
  for (const char of s) {
    if ('aeiouAEIOU'.includes(char)) {
      result += vowelsSorted.pop();
    } else {
      result += char;
    }
  }

  // Step 3: Return the final string
  return result;
};