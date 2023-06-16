/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  var copy = init;
  const increment = () => {
    init++;
    return init;
  }
  const decrement = () => {
    init--;
    return init;
  }
  const reset = () => {
    init = copy;
    return init;
  }
  return { increment, decrement, reset };
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/