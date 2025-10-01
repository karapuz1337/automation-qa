// Create a book object with properties
const book = {
    title : "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year : 1997
};

// Destructure title and author with renaming
const { title : bookTitle, author : bookAuthor } = book;

// Print destructured variables
console.log(`The book "${bookTitle}" is written by ${bookAuthor}.`);

/*
Output:
The book "Harry Potter and the Sorcerer's Stone" is written by J.K. Rowling.
*/
