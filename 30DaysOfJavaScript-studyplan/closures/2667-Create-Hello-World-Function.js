/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  }

  // OR
  // return () => "Hello World";
};

/**
* const f = createHelloWorld();
* f(); // "Hello World"
*/