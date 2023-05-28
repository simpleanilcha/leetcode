/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  // Approach 1: For Loop
  const returnObject = {};
  for (const item of this) {
    const key = fn(item);
    if (key in returnObject) {
      returnObject[key].push(item);
    } else {
      returnObject[key] = [item];
    }
  }
  return returnObject;

  // Approach 2: Reduce
  // return this.reduce((accum, item) => {
  //     const key = fn(item);
  //     accum[key] ||= [];
  //     accum[key].push(item);
  //     return accum;
  // }, {});
};

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/