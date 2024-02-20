import BookService from '../services/BookService.js';

class BookController {
  constructor(bookService) {
    this.bookService = bookService;
    this.createBook = this.createBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.rentBook = this.rentBook.bind(this);
    this.returnBook = this.returnBook.bind(this);
    this.markBookAsUnsuitable = this.markBookAsUnsuitable.bind(this);
    this.getAllBooks = this.getAllBooks.bind(this);
  }

  async createBook(req, res, next) {
    try {
      const { code, title, author } = req.body;
      const newBook = await this.bookService.createBook({ code, title, author });
      res.status(201).json(newBook);
    } catch (error) {
      next(error);
    }
  }

  async deleteBook(req, res, next) {
    try {
      const { code } = req.params;
      const deletedBook = await this.bookService.deleteBook(code);
      res.status(200).json(deletedBook);
    } catch (error) {
      next(error);
    }
  }

  async rentBook(req, res, next) {
    try {
      const { code } = req.params;
      const rentedBook = await this.bookService.rentBook(code);
      res.status(200).json(rentedBook);
    } catch (error) {
      next(error);
    }
  }

  async returnBook(req, res, next) {
    try {
      const { code } = req.params;
      const returnedBook = await this.bookService.returnBook(code);
      res.status(200).json(returnedBook);
    } catch (error) {
      next(error);
    }
  }

  async markBookAsUnsuitable(req, res, next) {
    try {
      const { code } = req.params;
      const markedBook = await this.bookService.markBookAsUnsuitable(code);
      res.status(200).json(markedBook);
    } catch (error) {
      next(error);
    }
  }

  async getAllBooks(req, res, next) {
    try {
      const allBooks = await this.bookService.getAllBooks();
      res.status(200).json(allBooks);
    } catch (error) {
      next(error);
    }
  }
}

export default BookController;
