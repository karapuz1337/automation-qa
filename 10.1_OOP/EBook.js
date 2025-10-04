import Book from "./Book.js";

// Class EBook
export default class EBook extends Book {
    /*
     Takes 4 parameters:
     title : the title of the book;
     author : the author of the book;
     releaseYear : the year the book was released;
     fileFormat : the file format of the book file;
     */
    constructor(title, author, releaseYear, fileFormat) {
        super(title, author, releaseYear);
        this._fileFormat = this._validateFileFormatParam(fileFormat);
    }

    // Method to print all info about the Book. Reuses the getBookInfo from superclass
    printBookInfo() {
        console.log([this.getBookInfo(), `File format: ${this._fileFormat}`].join(" "));
    }

    static VALID_FILE_FORMATS = [
        "epub",     // Most common, widely supported
        "pdf",      // Portable Document Format
        "mobi",     // Amazon Kindle (older)
        "azw",      // Amazon Kindle
        "kpf",      // Amazon Kindle
        "azw3",     // Amazon Kindle (newer)
        "fb2",      // FictionBook (popular in Russia)
        "txt",      // Plain text
        "rtf",      // Rich Text Format
        "doc",      // Microsoft Word (older)
        "docx",     // Microsoft Word (newer)
        "html",     // Web format
        "htm",      // Web format (alternative)
        "xhtml",    // Extended HTML
        "pdb",      // Palm Database
        "prc",      // Palm Resource
        "lit",      // Microsoft Reader (discontinued)
        "chm",      // Compiled HTML Help
        "djvu",     // DjVu format
        "cbr",      // Comic Book RAR
        "cbz",      // Comic Book ZIP
        "ibooks",   // Apple iBooks
        "iba",      // Apple iBooks
        "kf8",      // Kindle Format 8
        "opf",      // Open Packaging Format
        "oxps",     // Open XML Paper Specification
        "xps",      // XML Paper Specification
    ];

    // Method to validate the provided file format parameter
    _validateFileFormatParam(value) {
        // Check if value is provided
        if (typeof value === "undefined" || typeof value === null) {
            throw new Error(`Please provide the file format parameter`);
        }

        // Convert the value to clean string
        const format = value.toString().toLowerCase().trim().replace(/^\./, '');

        // Check if the format is valid
        if (!EBook.VALID_FILE_FORMATS.includes(format)) {
            throw new Error(`Invalid file format. Supported formats: ${EBook.VALID_FILE_FORMATS.join(", ")}`);
        }

        return format;
    }

    // Get method for the file format
    get fileFormat() {
        return this._fileFormat;
    }

    // Set method for the file format
    set fileFormat(newFileFormat) {
        this._fileFormat = this._validateFileFormatParam(newFileFormat);
    }

    // Static method to convert Book objects to EBook objects
    static convertToEBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.releaseYear, fileFormat);
    }
}