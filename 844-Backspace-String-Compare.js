/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  function removeSpace(str) {
    return str.split('').reduce((acc, char) => {
      if (char === '#') acc.pop()
      else acc.push(char)

      return acc
    }, [])
  }

  return removeSpace(s).join('') === removeSpace(t).join('')
};