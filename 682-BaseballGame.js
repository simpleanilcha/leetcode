/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const record = []
  let sum = 0

  for (let i = 0; i < operations.length; i++) {
    const recordLength = record.length
    if (operations[i] === '+') {
      const number = Number(record[recordLength - 1]) + Number(record[recordLength - 2])
      record.push(number)
      sum += number
    } else if (operations[i] === 'C') {
      const number = record.pop()
      sum -= number
    } else if (operations[i] === 'D') {
      const number = Number(record[recordLength - 1]) * 2
      record.push(number)
      sum += number
    } else {
      const number = Number(operations[i])
      record.push(number)
      sum += number
    }
  }

  return sum
};