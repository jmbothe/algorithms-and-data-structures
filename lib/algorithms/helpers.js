const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const numAscend = (a, b) => a - b;

const numDescend = (a, b) => b - a;

const alphaAscend = (a, b) => a[0].toLowerCase()
  .charCodeAt(0) - b[0].toLowerCase().charCodeAt(0);

const alphaDescend = (a, b) => b[0].toLowerCase()
  .charCodeAt(0) - a[0].toLowerCase().charCodeAt(0);

module.exports = {
  random,
  numAscend,
  numDescend,
  alphaAscend,
  alphaDescend,
};
