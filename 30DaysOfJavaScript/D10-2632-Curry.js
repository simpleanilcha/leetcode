/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
  const res = [];
  return function curried(...args) {
    res.push(...args);
    if (res.length < fn.length) {
      return curried;
    }
    return fn(...res);
  };

  // Approach 2: Currying with the Built-in Bind Method
  // return function curried(...args) {
  //   if (args.length >= fn.length) {
  //     return fn.apply(this, args)
  //   }
  //   return curried.bind(this, ...args)
  // };
};

/**
* function sum(a, b) { return a + b; }
* const csum = curry(sum);
* csum(1)(2) // 3
*/