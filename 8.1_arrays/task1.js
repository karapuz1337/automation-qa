// create source array
const numbers = [2, -5, 0, 7, -3, 0, 10, -8]

// create count variables
let positiveCount = 0
let negativeCount = 0
let zeroCount = 0

// for in loop to go though all numbers in array
for (const number of numbers) {
    // if given value is not a number, skip it
    if (typeof number !== "number") {
        continue
    }
    // check if number is positive and increase the positiveCount if true
    if (number > 0) {
        positiveCount ++
        continue
    }

    // check if number is negative and increase the negativeCount if true
    if (number < 0) {
        negativeCount ++
        continue
    }

    // if number is not less or more than zero, increase the zeroCount
    zeroCount ++
}

console.log(`Кількість позитивних чисел: ${positiveCount}`)
console.log(`Кількість негативних чисел: ${negativeCount}`)
console.log(`Кількість нульових чисел: ${zeroCount}`)

/*
Кількість позитивних чисел: 3
Кількість негативних чисел: 3
Кількість нульових чисел: 2
 */