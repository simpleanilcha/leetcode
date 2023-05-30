/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function (context, ...args) {
  // Approach 1: Using Object
  Object.defineProperty(context, 'fn', {
    value: this,
    enumerable: false,
  });

  return context.fn(...args);
}

/**
* function increment() { this.count++; return this.count; }
* increment.callPolyfill({count: 1}); // 2
*/