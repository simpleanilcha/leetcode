/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let count = init
  return {
    increment: function () {
      count += 1
      return count
    },
    decrement: function () {
      count -= 1
      return count
    },
    reset: function () {
      return (count = init)
    }
  }

};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/