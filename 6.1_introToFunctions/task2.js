// define a function to determine the person is adult or not
function isAdult(age) {
    // check if age is provided
    if (typeof age === "undefined") {
        throw new Error("Age must be provided")
    }
    // check if age is a number
    if (typeof age !== "number") {
        throw new Error("Age must be a number")
    }
    // check if age is valid
    if (age < 0) {
        throw new Error("Age must be greater or equal to zero")
    }
    // determine if the person is adult and return true if age is equal or greater than 18
    return age >= 18;
}

// define a function to print if a person is an adult or not
function printIsAdult(age, name="The person") {
    if (isAdult(age)) {
        console.log(`${name} is an adult.`)
    }
    else{
        console.log(`${name} is not an adult.`)
    }
}

// create two users with different ages
const user1name = "Lucas"
const user1Age = 25

const user2name = "John"
const user2Age = 15

// call print function for each user
printIsAdult(user1Age, user1name)
printIsAdult(user2Age, user2name)
