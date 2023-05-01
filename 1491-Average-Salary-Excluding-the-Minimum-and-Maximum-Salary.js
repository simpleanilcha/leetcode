/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  const minSalary = Math.min(...salary)
  const maxSalary = Math.max(...salary)

  const arr = salary.filter(item => item !== minSalary && item !== maxSalary)
  const total = arr.reduce((accum, curr) => accum + curr, 0)

  return (total / arr.length).toFixed(5)
};