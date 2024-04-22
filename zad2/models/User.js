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
}

module.exports = User;