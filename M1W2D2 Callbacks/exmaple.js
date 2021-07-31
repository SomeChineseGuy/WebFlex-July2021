// // const findKey = function(object, callback) {
// //   for (const key in object) {
// //     console.log(object[key]);
// //   }
// // };
// // findKey({
// //   "Blue Hill": { stars: 1 },
// //   "Akaleri":   { stars: 3 },
// //   "noma":      { stars: 2 },
// //   "elBulli":   { stars: 3 },
// //   "Ora":       { stars: 2 },
// //   "Akelarre":  { stars: 3 }
// // }, x => x.stars === 2); // => "noma"

// // const obj = {
// //   "Blue Hill": { stars: 1 },
// //   "Akaleri":   { stars: 3 },
// //   "noma":      { stars: 2 },
// //   "elBulli":   { stars: 3 },
// //   "Ora":       { stars: 2 },
// //   "Akelarre":  { stars: 3 }
// // }

// // const loopOverMe = (obj) => {
// //   for(const key in obj) {
// //     console.log(obj[key].stars)
// //   }
// // }

// // loopOverMe(obj)

// // const args = process.argv.slice(2);
// // const rollDice = function (x) {
// //   let space = []
// //   for (i = 0; i < x; i++) {
// //     space.push((1 + Math.floor(Math.random() * 6)))
// //   }
// //   console.log(`Rolled ${x} dice: ${space}`);
// //   return `Rolled ${x} dice: ${space}`  
// // }

// // rollDice(args)

// // The second argument/parameter is expected to be a (callback) function
// // const findWaldo = function(names, found) {
// //   names.forEach(function(name, index) {
// //     if (name === 'Waldo') {
// //       found(name, index);
// //     }
// //   })
// //   };
// // const actionWhenFound = function(name, index) {
// //   console.log(`Found ${name} at index ${index}!`);
// // };
// // findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// const findWaldo = (names, found) => {
//   names.forEach(function(name, index) {
//     if (name === 'Waldo') {
//       found(name, index);
//     }
//   });
// };
// findWaldo(["Alice", "Bob", "Waldo", "Winston"], (name, index) => console.log(`Found ${name} at index ${index}`));

// const words = (word) => {
//   console.log(word)
//   return word
// }

// let stuff = words("Hey!")
// console.log(stuff.length)
// “Hello”
// "Hello"

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(array1, array2) {
  const pass = '✔️✔️✔️ Assertion Passed';
  const fail = '❌❌❌ Assertion Failed';
  eqArrays(array1, array2) ? console.log(pass) : console.log(fail);
};
const middle = function(array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  }else {
    if (Number.isInteger(array.length/2)) {
      newArray.push(array[(array.length/2) - 1], array[(array.length/2)]);
      return newArray;
    } else {
      newArray.push(array[(Math.ceil(array.length / 2)) - 1]);
      return newArray;
    }
  }
}
// assertArraysEqual(middle([1]), []) // => []
// assertArraysEqual(middle([1, 2]), []) // => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]
