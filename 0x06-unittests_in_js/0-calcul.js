module.exports = function calculateNumber(a, b = 0) {
  const aNUM = Number(a);
  const bNUM = Number(b);

  if (Number.isNaN(aNUM) || Number.isNaN(bNUM)) {
    throw TypeError('Parameters must be numbers');
  } else {
    return Math.round(aNUM) + Math.round(bNUM);
  }
};