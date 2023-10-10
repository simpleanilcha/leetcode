/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const n = nums.length;
  let ans = n; // Initialize the answer as the maximum possible value 'n'.
  const s = new Set(); // Create a set to store unique elements from 'nums'.

  // Step 1: Insert all unique elements from 'nums' into the set 's'.
  for (const a of nums) {
    s.add(a);
  }

  // Step 2: Convert the set 's' back to an array 'unique'.
  const unique = [...s];

  let j = 0; // Initialize a pointer 'j'.
  const m = unique.length; // Get the size of the 'unique' array.

  // Step 3: Iterate through the 'unique' array.
  for (let i = 0; i < m; i++) {
    // Step 4: Move the pointer 'j' to find the rightmost element within the current range.
    while (j < m && unique[j] < unique[i] + n) {
      j++;
    }
    // Step 5: Calculate the minimum operations required for the current range.
    ans = Math.min(ans, n - (j - i));
  }
  // Step 6: Return the minimum operations required.
  return ans;
};