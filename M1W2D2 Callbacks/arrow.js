const sayHello = function(name) {
  console.log(`Hello ${name}`)
}

// ES6
// ALL of these "Feature" from CoffeScript

// const sayHello = (name) => {
//   console.log(`Hello ${name}`)
// }

// // Pros
// // Less Typing
// const sayHello = name => {
//   console.log(`Hello ${name}`)
// }
// // if one arguement no bracket
// // Write it all in one line
// const sayHello = name => console.log(`Hello ${name}`)
// // if no curly brace we have a implicit return {}
// const sayHello = name =>  `hello ${name}`


// Con
// Doesn't create "This"

const counter = {
  count: 0,
  next: () => {
    return this.count ++
  }
}

counter.next()
console.log(counter)