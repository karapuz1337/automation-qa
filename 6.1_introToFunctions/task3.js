function checkOrder(available, ordered) {
    // check if both args are provided
    if (typeof available === "undefined" || typeof ordered === "undefined"){
        throw new Error("Please provide both arguments: number of available goods and number of ordered goods")
    }
    // check if both args are numbers
    if (typeof available !== "number" || typeof ordered !== "number") {
        throw new Error("Please provide both arguments as numbers")
    }
    // check if numbers are valid (non-negative)
    if (available < 0 || ordered < 0) {
        throw new Error("Number of available and ordered goods cannot be less than 0")
    }
    // check if the order is empty
    if (ordered === 0) {
        return "Your order is empty"
    }
    // check if we have available goods for the order
    if (available < ordered) {
        return "Your order is too large, we don’t have enough goods."
    }
    // order can be fulfilled
    return "Your order is accepted"
}
