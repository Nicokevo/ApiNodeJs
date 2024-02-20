import BookService from '../services/BookService.js';

class BookController {
  constructor() {
    this.bookService = new BookService();
  }

  async createBook(req, res) {
    try {
      const { code, title, author } = req.body;
      const newBook = await this.bookService.createBook(code, title, author);
      res.status(201).json(newBook);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteBook(req, res) {
    try {
      const { code } = req.params;
      const deletedBook = await this.bookService.deleteBook(code);
      res.status(200).json(deletedBook);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async rentBook(req, res) {
    try {
      const { code } = req.params;
      const rentedBook = await this.bookService.rentBook(code);
      res.status(200).json(rentedBook);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async returnBook(req, res) {
    try {
      const { code } = req.params;
      const returnedBook = await this.bookService.returnBook(code);
      res.status(200).json(returnedBook);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async markBookAsUnsuitable(req, res) {
    try {
      const { code } = req.params;
      const markedBook = await this.bookService.markBookAsUnsuitable(code);
      res.status(200).json(markedBook);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAllBooks(req, res) {
    try {
      const allBooks = await this.bookService.getAllBooks();
      res.status(200).json(allBooks);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default BookController;
