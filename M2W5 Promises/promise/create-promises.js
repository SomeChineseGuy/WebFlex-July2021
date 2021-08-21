const promises = new Promise((resolved, rejected) => {
  resolved("Value")
  // rejected("Error message")
})

promises
  .then((data) => {
    console.log(data)
  })
  .catch((data) => {
    console.log(data)
  })