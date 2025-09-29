// create source array of numbers
const sourceNumbers = [1, 2, 3, 4, 5]

// create a multiplied array that takes each number and multiplies it to its index in the source array
const multipliedNumbers = sourceNumbers.map(((num, index) => num * index))

console.log(multipliedNumbers) // [ 0, 2, 6, 12, 20 ]
