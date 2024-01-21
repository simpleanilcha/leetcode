/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let robbedIdPlus1 = 0;
  let robbedIdPlus2 = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    const sumIfSkipped = robbedIdPlus1;
    const sumIfRobbed = nums[i] + robbedIdPlus2;

    const maxRobbedAtIdx = Math.max(sumIfSkipped, sumIfRobbed);

    robbedIdPlus2 = robbedIdPlus1;
    robbedIdPlus1 = maxRobbedAtIdx;
  }

  return robbedIdPlus1;
};