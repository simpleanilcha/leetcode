/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
  // Approach 3: Using JSON.stringify and Sorting:
  function helper(key, value) {
    if (value && typeof value === "object" && !Array.isArray(value))
      return Object.fromEntries(Object.entries(value).sort());
    else
      return value;
  }

  const stringifiedO1 = JSON.stringify(o1, helper);
  const stringifiedO2 = JSON.stringify(o2, helper);

  return stringifiedO1 === stringifiedO2;
};