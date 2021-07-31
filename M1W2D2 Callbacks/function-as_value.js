const obj = {
  name: "alvin"
}
const age = 10;
const newAge = age;
// function declarations
function sayName(name){}

// function expression
const sum = 2 + 2
console.log(sum)
const sayHello = function(name) {
  console.log(`hello ${name}`)
}

const helloAndrew = sayHello('andrew')

console.log(helloAndrew)

const helloAndrew2 = sayHello
helloAndrew2("Steve")
console.log(helloAndrew2.toString())

const addTen = function(num) {
  console.log(num + 10)
}

const funcArray = [addTen, helloAndrew2]
funcArray[0](20)

const toPrintToConsole = console.log
toPrintToConsole("Hello?")
toPrintToConsole.message = "Hey! Whatcha up to?";

console.log(toPrintToConsole)