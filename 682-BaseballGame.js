/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const record = []

  for (let i = 0; i < operations.length; i++) {
    const recordLength = record.length
    if (operations[i] === '+') {
      record.push(Number(record[recordLength - 1]) + Number(record[recordLength - 2]))
    } else if (operations[i] === 'C') {
      record.pop()
    } else if (operations[i] === 'D') {
      record.push(Number(record[recordLength - 1]) * 2)
    } else {
      record.push(Number(operations[i]))
    }
  }

  const sum = record.reduce((accum, curr) => accum + curr, 0)
  return sum
};