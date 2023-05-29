/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  // Approach 2: Built-in instanceof method
  if (obj === null || obj === undefined || typeof classFunction !== "function")
    return false;

  let inputObj = obj;
  if (typeof obj !== "object") {
    // Make sure it's an object so instanceof has direct access to the constructor function
    inputObj = Object(obj);
  }
  return inputObj instanceof classFunction;
};

/**
* checkIfInstanceOf(new Date(), Date); // true
*/