// Number for multiplication table
const number = 5

// Check if it is a number
if (typeof number === "number"){
    // FOR
    console.log(`Multiplication table for number "${number}" using FOR:`)
    for (let i = 1; i <= 10; i++){
        const result = number * i
        console.log(`${number} x ${i} = ${result}`)
    }

    // WHILE
    console.log(`\nMultiplication table for number "${number}" using WHILE:`)
    let i = 1
    while (i <= 10){
        const result = number * i
        console.log(`${number} x ${i} = ${result}`)
        i++
    }
}
else{
    throw new Error("Value must be a number")
}

/*
OUTPUT:
Multiplication table for number "5" using FOR:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50

Multiplication table for number "5" using WHILE:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50

*/