// Proven that all functions are just Objects

const sayHello = function(name) {
  console.log(`Hello ${name}`)
  return name
}

const addTen = function(num) {
  console.log(num + 10)
}

const runFunc = function(anotherFunc) {
  console.log(anotherFunc("Steve"))
}

runFunc(sayHello)
runFunc(addTen)

runFunc(addTen)

sayHello("Mary")
sayHello("Nel")
sayHello("Tom")

console.log(addTen.toString())

const numArr = [1, 2, 3]
const addNumber = function(arr, num) {
  arr.push(num)
  return num
}

console.log(addNumber(numArr, 10))

const ten = addNumber(numArr, 10)
const args = process.argv.slice(2);