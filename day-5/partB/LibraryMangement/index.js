class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }

  getInfo() {
    return `${this.title} by ${this.author}, published in ${this.year} (${this.genre})`;
  }
}

function createBook(title, author, year, genre) {
  return new Book(title, author, year, genre);
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  filterBooksByYear(year) {
    return this.books.filter((book) => book.year > year);
  }

  getAllTitles() {
    return this.books.map((book) => book.title);
  }

  getTotalBooks() {
    return this.books.reduce((total, book) => total + 1, 0);
  }

  getAveragePublicationYear() {
    if (this.books.length === 0) return 0;
    const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
    return totalYears / this.books.length;
  }
}

const myLibrary = new Library();

const book1 = createBook(
  "To Kill a Mockingbird",
  "Harper Lee",
  1960,
  "Fiction"
);
const book2 = createBook("1984", "George Orwell", 1949, "Dystopian");
const book3 = createBook(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  1925,
  "Classic"
);
const book4 = createBook(
  "Harry Potter and the Sorcerer's Stone",
  "J.K. Rowling",
  1997,
  "Fantasy"
);


myLibrary.addBook(book1);
myLibrary.addBook(book2);

