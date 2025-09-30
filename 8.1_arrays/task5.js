// create first array
const strings = ["one", "two", "three", "four"]

// crate second array
const numbers = [1, 2, 3, 4]

// create third array (just for fun)
const booleans = [true, false]

// concatenate all arrays into one using two methods
const allArraysAtOnce = strings.concat([...numbers, ...booleans])

console.log(allArraysAtOnce)

/*
[
  'one',   'two',
  'three', 'four',
  1,       2,
  3,       4,
  true,    false
]
 */