import Book from "./Book.js"
import EBook from "./EBook.js"

// Create some Book and EBook objects
const book1 = new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", 1997);
const book2 = new Book("Ancient Manuscript", "Unknown", -200);

const eBook1 = new EBook("11/22/63", "Stephen King", "2011", ".epub");
const eBook2 = new EBook("The Long Walk", "Stephen King", 1979, ".FB2");

// Create an array of books
const booksList = [book1, book2, eBook1, eBook2];

// Use the printBookInfo method on all objects
for (const book of booksList) {
    book.printBookInfo();
}

/*
The book "Harry Potter and the Sorcerer's Stone" was written by J. K. Rowling in the year 1997.
The book "Ancient Manuscript" was written by Unknown in the year 200 BCE.
The book "11/22/63" was written by Stephen King in the year 2011. File format: epub
The book "The Long Walk" was written by Stephen King in the year 1979. File format: fb2
 */

// Use get and set methods
console.log(book1.author); // J. K. Rowling
book1.author = "Unknown Author";
console.log(book1.author); // Unknown Author

console.log(eBook2.fileFormat); // fb2
eBook2.fileFormat = " .DjVu   ";
console.log(eBook2.fileFormat); // djvu

// Use the theOldest method on books array
const oldestBook = Book.theOldest(booksList);
console.log(oldestBook);

/*
Book {
  _title: 'Ancient Manuscript',
  _author: 'Unknown',
  _releaseYear: '200 BCE'
}
 */

// Use the convertToEBook method on some Book object
const eBook3 = EBook.convertToEBook(book1, " .HTML");
eBook3.printBookInfo();

/*
The book "Harry Potter and the Sorcerer's Stone" was written by Unknown Author in the year 1997. File format: html
 */