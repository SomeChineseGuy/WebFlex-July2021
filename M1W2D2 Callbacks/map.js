const futuramaCharacters = ["Fry", "Leela", "Bender", 'Professor F.']

const newNames = [];
for(const character of futuramaCharacters) {
  const update = `Hey ${character}`
  newNames.push(update)
}



// const betterNames = futuramaCharacters.map(function(characters) {
//   return `Hey ${character}`
// })

// console.log(betterNames)

const ourMap = (arr, callback) => {
  const outPut = [];
  
  for(elem of arr) {
    const returnVal = callback(elem)
    outPut.push(returnVal)
  } 
  return outPut;
}

// const betterNames = futuramaCharacters.map(character => `Hey ${character}`)
// const betterNames2 = ourMap([2, 3, 60], (num) => num * 10)

const shoppingList = ['bread', 'chicken', 'ham']
// const checkList = shoppingList.map(item => {
//   if(item === "bread") {
//     console.log("replace with Beer")
//   } else {
//     console.log(item)
//   }
// })

// const checkList2 = ourMap(shoppingList, item => {
//   if(item === "bread") {
    
//     return "replace with Beer"
//   } else {
    
//     return item
//   }
// })

// const checkList3 = ourMap(shoppingList, item => (item === "bread" ? "replace with Beer" : item))
// const checkList3 = ourMap(shoppingList, item => item === "bread" ?  "replace with Beer" :  item)
// const checkList3 = ourMap(shoppingList, item => (item === "bread" ? "replace with Beer" : item))
// const checkList3 = ourMap(shoppingList, item => item === "bread" ?  "replace with Beer" :  item)
const checkList2 = ourMap(shoppingList, item => item === 'bread' ?  'beer' : item)

// console.log(checkList)
// console.log(checkList2)
console.log(checkList3)