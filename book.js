const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  // Add book with validation
  addBook(book) {
    if (
      typeof book !== 'object' ||
      !book.title ||
      !book.author ||
      typeof book.year !== 'number'
    ) {
      console.error("Book information is incomplete or invalid.");
      return;
    }

    // Prevent duplicates
    const exists = this.books.some(b => b.title === book.title);
    if (exists) {
      console.warn("Book already exists in the library.");
      return;
    }

    this.books.push(book);
    console.log(`Book "${book.title}" added successfully.`);
  },

  // Find book by title
  findBookByTitle(title) {
    const found = this.books.find(book => book.title === title);
    return found || "Book not found.";
  },

  // Remove book by title
  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
      const removed = this.books.splice(index, 1);
      console.log(`Removed book: "${removed[0].title}"`);
    } else {
      console.log("Book not found.");
    }
  }
};

// Test cases
library.addBook({ author: "George Orwell", year: 1949 }); // Missing title
library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); // Valid book
library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); // Duplicate

console.log(`Total Books: ${library.books.length}`);
console.log(library.findBookByTitle("1984")); // Should find the book
library.removeBook("The Hobbit"); // Remove existing book
console.log(`Total Books: ${library.books.length}`);
