/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  const L = mountainArr.length();
  // Find the peak
  let peakIndex;
  let low = 0;
  let high = L - 1;
  while (low <= high) {
    const mid = (low + high) >> 1;
    const midVal = mountainArr.get(mid);
    const rightVal = mountainArr.get(mid + 1);
    if (midVal < rightVal) {
      low = mid + 1;
    } else {
      const leftVal = mountainArr.get(mid - 1);
      if (midVal > leftVal) {
        peakIndex = mid;
        break;
      } else {
        high = mid - 1;
      }
    }
  }

  // Look for it on the left
  low = 0;
  high = peakIndex;
  while (low <= high) {
    const mid = (low + high) >> 1;
    const midVal = mountainArr.get(mid);
    if (midVal === target) {
      return mid;
    } else if (midVal < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  // Look for it on the right
  low = peakIndex;
  high = L - 1;
  while (low <= high) {
    const mid = (low + high) >> 1;
    const midVal = mountainArr.get(mid);
    if (midVal === target) {
      return mid;
    } else if (midVal < target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};