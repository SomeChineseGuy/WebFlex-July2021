// Function as a value
const value = function(stuff) {
  console.log(`Do ${stuff}`)
}

// Calling a function vs Passing a function
const name = value("Is this working")
const newValue = value;
console.log(newValue)

// Callbacks (more on this later)
const runFunc = function(anotherFunc) {
  anotherFunc("Run")
}

// Anonymous Function/Value
const name = "Ryan"
"Steve" // this is Anonymous

const sayHello = function(name) {
  console.log(`Hello ${name}`)
}

const runFunc = (anotherFunc) => {
  anotherFunc("Hello")
}

runFunc(function(name) {
  console.log(`Hello ${name}`)
})


