// fnUsingCallback((err, data) => {
//   if(err) {
//     return console.log(err)
//   }
//   fnUsingCallback((err, data) => {
//     if(err) {
//       return console.log(err)
//     }
//   })
// })

const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

returnPromise("First")
  .then((data) => {
    console.log(data)
    return "Second"
  })
  .then((data) => {
    console.log(data)
    return returnRejectedPromise("STOP!")
  })
  .then((data) => {
    console.log(data)
    return returnRejectedPromise("STOP!2")
  })
  .then((data) => {
    console.log(data)
    return "Forth"
  })
  .catch((err) => {
    console.log(err)
//   })