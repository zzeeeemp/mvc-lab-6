class User {
  constructor(id, login, borrowedBooks = []) {
      this.id = id;
      this.login = login;
      this.borrowedBooks = borrowedBooks;
  }

  static getAll() {
      return [
          new User(1, "User1"),
          new User(2, "User2"),
        
      ];
  }

  borrowBook(book) {
      this.borrowedBooks.push(book);
  }

  returnBook(bookId) {
      this.borrowedBooks = this.borrowedBooks.filter(book => book.id !== bookId);
  }

  findBorrowedBookById(bookId) {
      return this.borrowedBooks.some(book => book.id === bookId);
  }
}

module.exports = User;
