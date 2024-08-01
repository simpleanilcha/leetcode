/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  const ages = details.map(item => item.slice(11, 13))
  const seniorCitizens = ages.filter(item => Number(item) > 60)
  return seniorCitizens.length
};