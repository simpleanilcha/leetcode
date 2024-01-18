/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 4) return n;

  let prevStep1 = 1;
  let prevStep2 = 1;
  let fib = 0;

  for (let i = 2; i <= n; i++) {
    fib = prevStep1 + prevStep2;
    prevStep1 = prevStep2;
    prevStep2 = fib;
  }

  return fib;
};