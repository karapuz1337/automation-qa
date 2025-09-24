// function to print numbers reducing to zero
function printReducingNumbers(startNumber) {
    // Base Case
    if (startNumber <= 0) {
        console.log(startNumber)
    }
    else {
        // Recursive Case
        console.log(startNumber)
        printReducingNumbers(startNumber - 1)
    }
}

// handler function to handle exceptions (more exceptions can be added in the future)
function handleNumber(num) {
    if (typeof num !== "number") {
        throw new Error("Please provide a number")
    }
    return num
}

// create a number that will be handled and provided as an argument to print function
const numberToReduce = handleNumber(5)
// call print function with handled argument
printReducingNumbers(numberToReduce)

/*
OUTPUT:
5
4
3
2
1
0
 */
