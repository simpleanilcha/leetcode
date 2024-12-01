/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  // Approach 1: Brute Force
  // Time complexity: O(n^2)
  // Space complexity: O(1)
  // const arrLength = arr.length;
  // for(let i = 0; i < arrLength; i++) {
  //     for(let j = 0; j < arrLength; j++) {
  //         if ((i !== j) && arr[i] === 2 * arr[j]) {
  //             return true;
  //         }
  //     }
  // }
  // return false;

  // Approach 2: Set Lookup
  // Time complexity: O(n)
  // Space complexity: O(n)
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] * 2) || set.has(arr[i] / 2)) {
      return true;
    }
    set.add(arr[i]);
  }
  return false;
};
