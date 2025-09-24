// function to determine if number is even or odd and use callbacks for each case
function handleNum(num, ifNumEven, ifNumOdd) {
    // check if number is provided and if it is a number
    if (typeof num !== "number") {
        throw new Error("Please provide a number as a first argument")
    }
    // check if both message handler functions are given as arguments
    if (typeof ifNumEven !== "function" || typeof ifNumOdd !== "function") {
        throw new Error("Please provide both message handle functions: one for even numbers, and one for odd")
    }
    // determine if number is even or odd
    if (num % 2 === 0) {
        // use callback for even handle function
        return ifNumEven(num)
    }

    // use callback for odd handle function
    return ifNumOdd(num)
}

// function to print a message for even number
function handleEven(num) {
    console.log(`${num} is an even number.`)
}

// function to print a message for odd number
function handleOdd(num) {
    console.log(`${num} is an odd number.`)
}

// call the handleNum function with callbacks
handleNum(4, handleEven, handleOdd) // 4 is an even number.
