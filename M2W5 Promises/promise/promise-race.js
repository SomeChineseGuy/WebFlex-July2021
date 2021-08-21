const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

const randomDelay = () => Math.floor(Math.random() * 5000)

const promiseOne = returnPromise("Cheese Burger", randomDelay())
const promiseTwo = returnPromise("Spicy Chicken!", randomDelay())
const promiseThree = returnPromise("Bacon... like all the Bacon", randomDelay())
// const promiseFour = returnRejectedPromise("No Food!")

const orders = [promiseOne, promiseTwo, promiseThree]

Promise.race(orders)
  .then((data) => {
    console.log(data)
  })
  .catch(data => {
    console.log(data)
  })