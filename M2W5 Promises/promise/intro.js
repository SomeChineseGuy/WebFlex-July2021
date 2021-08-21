const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;

const promise = returnPromise("Return me", 2000)

console.log(promise)

// setTimeout(()=>{
//   console.log(promise)
// },10000)
promise
  .then((data) => {
    console.log(data)
    return "Hello again!";
  })
  .then((data) =>{ 
    console.log(data)
    return "Hello Again! Again... again!"
  })
  .then((data) => {
    console.log(data)
  })

  // const promise2 = promise.then((data) => {
  //   console.log(data)
  //   return "Hello again!"
  //  })
  //  const promise3 = promise2.then((data) => {
  //    console.log(data)
  //    return "Hello Again! Again.. again!"
  //  })
  //  console.log(promise3)