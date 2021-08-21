const returnPromise = (value, delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`yay! resolved!: ${value}`), delay);
  });
};

const returnRejectedPromise = (value, delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(`doh! rejected: ${value}`), delay);
  });
};

module.exports = {
  returnPromise,
  returnRejectedPromise
}