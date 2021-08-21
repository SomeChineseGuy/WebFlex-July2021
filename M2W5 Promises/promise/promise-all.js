const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

const promiseOne = returnPromise("Cheese Burger", 2000)
const promiseTwo = returnPromise("Spicy Chicken!", 3000)
const promiseThree = returnPromise("Bacon... like all the Bacon", 5000)
const promiseFour = returnRejectedPromise("No Food!")

1 === "1"
1 == "1"

const orders = [promiseOne, promiseTwo, promiseThree, promiseFour]

Promise.all(orders)
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })