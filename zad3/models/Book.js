class Book {
  constructor(id, title, author, year, available = true) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.year = year;
      this.available = available;
  }

  static getAll() {
      return [
        new Book(1, 'The Lord of the Rings', 'J.R.R. Tolkien', 1954),
        new Book(2, '1984', 'George Orwell', 1949),
        new Book(3, 'The Hitchhiker\'s Guide to the Galaxy', 'Douglas Adams', 1979),
      ];
  }

  borrow() {
      this.available = false;
  }

  returnBook() {
      this.available = true;
  }
}

module.exports = Book;