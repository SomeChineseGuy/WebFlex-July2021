const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;

returnPromise('first', 2000)
  .then((data) => {
    console.log(data)
    returnPromise("second")
      .then((data) => {
        console.log(data)
      })
  })

returnPromise('first', 2000)
  .then((data) => {
    console.log(data)
  })
  .then((data) => {
    console.log(data)
  })