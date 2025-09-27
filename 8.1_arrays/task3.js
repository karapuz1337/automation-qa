// source array
const numbers = [10, 20, 30, 40, 50]

/*
calculate the sum of numbers from the source array
via the array reduce method that takes the callback of
currentValue plus the value of the previous callback iteration
 */
const sumOfNumbers = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue)

console.log(sumOfNumbers) // 150
