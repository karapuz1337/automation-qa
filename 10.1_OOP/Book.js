// Book class
export default class Book{
    /*
    Takes 3 parameters:
    title : the title of the book
    author : the author of the book
    releaseYear : the year the book was released (use the "-" sign for BCE years)
    */
    constructor(title, author, releaseYear) {
        this._title = this._validateStringParam(title, "title");
        this._author = this._validateStringParam(author, "author");
        this._releaseYear = this._validateYearParam(releaseYear);
    }

    // Method to get book info as a string
    getBookInfo() {
        return `The book "${this.title}" was written by ${this._author} in the year ${this._releaseYear}.`;
    }

    // Method to print all info about the Book
    printBookInfo() {
        console.log(this.getBookInfo());
    }

    // Method to validate the provided parameters for string parameters
    _validateStringParam(value, paramName) {
        // Check if value is provided
        if (typeof value === "undefined" || typeof value === null) {
            throw new Error(`Please provide the ${paramName} parameter`);
        }

        // Check if value is a string. Try to convert
        if (typeof value !== "string") {
            try {
                value = value.toString();
            }
            catch (error) {
                throw new Error(`Please provide the ${paramName} parameter as a string`);
            }
        }

        /* Check if value is not empty.
        The longest value is not set, since the longest book title is over 30000 symbols long.
        The longest author name is 800+ symbols.
         */
        if (value.trim().length < 1) {
            throw new Error(`Please provide the correct ${paramName} parameter`);
        }

        // Return clean string
        return value.trim();
    }

    // Method to validate provided year parameter
    _validateYearParam(value) {
        // Check if value is provided
        if (typeof value === "undefined" || typeof value === null) {
            throw new Error(`Please provide the release year`);
        }

        // Check if value is a number. Try to convert
        if (typeof value !== "number") {
            try {
                value = parseInt(value);
            }
            catch (error) {
                throw new Error(
                    `Please provide the "release year" parameter as a number. Use the "-" sign for BCE years`);
            }
        }

        // Check if the correct year is provided
        const currentYear = new Date().getFullYear();
        if (value > currentYear) {
            throw new Error(`Please provide the correct "release year". Use the "-" sign for BCE years`);
        }

        // Convert negative numbers to user-friendly strings
        if (value < 0) {
            // Remove the negative sign and add "BCE"
            const positiveYear = Math.abs(value);
            value = `${positiveYear} BCE`;
        }

        return value;
    }

    // Create Get and Set methods for each parameter

    // Get method for the book title
    get title() {
        return this._title;
    }

    // Set method for the book title
    set title(newTitle) {
        this._title = this._validateStringParam(newTitle, "title");

    }

    // Get method for the book author
    get author() {
        return this._author;
    }

    // Set method for the book author
    set author(newAuthor) {
        this._author = this._validateStringParam(newAuthor, "author");
    }

    // Get method for the release year
    get releaseYear() {
        return this._releaseYear;
    }

    // Set method for the release year
    set releaseYear(newReleaseYear) {
        this._releaseYear = this._validateYearParam(newReleaseYear);
    }

    // Static method to return the oldest book
    static theOldest(books) {
        // Check if non-empty array is provided as a parameter
        if (!books || books.length === 0) {
            throw new Error("Please provide a non-empty array of books");
        }

        // Helper function to convert years to comparable numbers (handle "BCE" years)
        const normalizeYear = (yearValue) => {
            // If it's already a number, return as is
            if (typeof yearValue === "number") {
                return yearValue;
            }

            // Convert to string
            const yearString = yearValue.toString();

            // If it contains "BCE", convert to negative number
            if (yearString.includes("BCE")) {
                const numericPart = parseInt(yearString.replace("BCE", "").trim());
                return -numericPart;
            }

            // Otherwise, convert string to positive number
            return parseInt(yearString);
        };

        // Use reduce to find the book with the earliest release year
        return books.reduce((oldest, current) => {
            const oldestYear = normalizeYear(oldest.releaseYear);
            const currentYear = normalizeYear(current.releaseYear);

            // Return the book with the earliest release year
            return currentYear < oldestYear ? current : oldest;
        });
    }
}
