// Create the first car object
const car1 = {
    brand : "Mercedes-AMG",
    model : "C63",
    year : 2015
};

// Create the second car object
const car2 = {
    brand : "Aston Martin",
    model : "Zagato",
    owner : "Stanislav"
};

// Create the third car object that spreads the previous car objects
// Note: car2 properties will override car1 properties with same keys
const car3 ={
    ...car1,
    ...car2,
};

// Print car3 object
console.log(car3);

/*
Output:
{
  brand: 'Aston Martin',    // Overridden by car2
  model: 'Zagato',          // Overridden by car2
  year: 2015,               // car1 key
  owner: 'Stanislav'        // car2 key
}
 */