/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num >= 10) {
    num = String(num).split('').reduce((accum, curr) => accum + Number(curr), 0)
  }
  return num
};

// METHOD 2
// var addDigits = function(num) {
//   num = String(num)
//   let total = 0
//   while (num.length !== 1) {
//     total = 0
//     for(let i of num) {
//       total += Number(i)
//     }
//     num = String(total)
//   }
//   return Number(num)
// };