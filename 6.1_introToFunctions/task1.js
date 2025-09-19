// declaration
function calculateRectAreaDecl(width, height) {
     // check if args are numbers
     if (typeof width !== "number" || typeof height !== "number") {
         throw new Error("Width and height must be numbers")
     }
     // check if args are valid for a rectangle
     if (width < 0 || height < 0) {
         throw new Error("Width and height must be positive numbers")
     }
     // calculate the area of the rectangle and return the result
     return width * height
}

console.log(calculateRectAreaDecl(5, 10))

// expression
const calculateRectAreaExp = function(width, height) {
    // check if args are numbers
    if (typeof width !== "number" || typeof height !== "number") {
        throw new Error("Width and height must be numbers")
    }
    // check if args are valid for a rectangle
    if (width < 0 || height < 0) {
        throw new Error("Width and height must be positive numbers")
    }
    // calculate the area of the rectangle and return the result
    return width * height
}

console.log(calculateRectAreaExp(5, 10))

// arrow
const calculateRectAreaArrow = (width, height) => {
    // check if args are numbers
    if (typeof width !== "number" || typeof height !== "number") {
        throw new Error("Width and height must be numbers")
    }
    // check if args are valid for a rectangle
    if (width < 0 || height < 0) {
        throw new Error("Width and height must be positive numbers")
    }
    // calculate the area of the rectangle and return the result
    return width * height
}

console.log(calculateRectAreaArrow(5, 10))
