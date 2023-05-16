/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    // Approach 1: Call Function Inside New Promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded")
      }, t)
      fn(...args)
        .then(resolve)
        .catch(reject)
    })

    // Fastest Runtime
    // Approach 3: Promise Race
    // const timeLimitPromise = new Promise((resolve, reject) => {
    //   setTimeout(() => reject("Time Limit Exceeded"), t)
    // });
    // const returnedPromise = fn(...args);
    // return Promise.race([timeLimitPromise, returnedPromise]);
  }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */