// Create person object with initial properties
const person = {
    firstName : "Henry",
    lastName : "Pope",
    age : 56
};

// Add email property to person object
person.email = "bighenrypope@yahoo.com";

// Delete age property from person object
delete person.age;

// Print updated person object
console.log(person);

/*
Output:
{
  firstName: 'Henry',
  lastName: 'Pope',
  email: 'bighenrypope@yahoo.com'
}
 */