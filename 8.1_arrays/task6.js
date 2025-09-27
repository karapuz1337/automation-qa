// source array
const numbersList = [1,10,14,2,4,5,43,34]

// copy the source array
const copyOfNumbersList = structuredClone(numbersList)

// sort the copy array from lower to higher number
copyOfNumbersList.sort((a, b) => a - b)

console.log(copyOfNumbersList)

/*
[
   1,  2,  4,  5,
  10, 14, 34, 43
]
 */
