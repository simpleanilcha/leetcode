/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  let start = 0;
  let x = spaces
    .map((space) => {
      const word = s.substring(start, space);
      start = space;
      return word;
    })
    .join(" ");
  x = x + " " + s.substring(spaces[spaces.length - 1]);
  return x;
};
