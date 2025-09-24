// function to divide two numbers
function divide(numerator, denominator) {
    // check if numbers are provided and if they are numbers
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Please provide both numerator and denominator as numbers")
    }

    // check if denominator is zero
    if (denominator === 0) {
        throw new Error("Cannot divide by zero")
    }

    return numerator / denominator
}

// case 1: valid division
try {
    console.log(`Результат ділення: ${divide(4, 2)}`)
}
catch (error) {
    console.log("Виникла помилка:", error.message)
}
finally {
    console.log("Робота завершена\n")
}

// case 2: division by zero
try {
    console.log(`Результат ділення: ${divide(2, 0)}`)
}
catch (error) {
    console.log("Виникла помилка:", error.message)
}
finally {
    console.log("Робота завершена\n")
}


// case 3: invalid argument type
try {
    console.log(`Результат ділення: ${divide("4", 2)}`)
}
catch (error) {
    console.log("Виникла помилка:", error.message)
}
finally {
    console.log("Робота завершена\n")
}

// case 4: both arguments are invalid
try {
    console.log(`Результат ділення: ${divide("string", "another string")}`)
}
catch (error) {
    console.log("Виникла помилка:", error.message)
}
finally {
    console.log("Робота завершена\n")
}

// case 4: decimal numbers
try {
    console.log(`Результат ділення: ${divide(0.1, 0.2)}`)
}
catch (error) {
    console.log("Виникла помилка:", error.message)
}
finally {
    console.log("Робота завершена\n")
}

// case 5: null value
try {
    console.log(`Результат ділення: ${divide(null, 2.5)}`)
}
catch (error) {
    console.log("Виникла помилка:", error.message)
}
finally {
    console.log("Робота завершена\n")
}
