/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  let op = [pref[0]];
  for (let i = 1; i < pref.length; i++)
    op.push(pref[i - 1] ^ pref[i]);
  return op;
};