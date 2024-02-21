class BookController {
  constructor(bookService) {
    this.bookService = bookService;
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

  async listBooksByStatus(req, res, next) {
    try {
      const { estado } = req.params;
      const booksByStatus = await this.bookService.getBooksByStatus(estado);
      res.status(200).json(booksByStatus);
    } catch (error) {
      next(error);
    }
  }

  async checkPrizeOnRent(req, res, next) {
    try {
      const { code } = req.params;
      const prize = await this.bookService.checkPrizeOnRent(code);
      res.status(200).json({ prize });
    } catch (error) {
      next(error);
    }
  }
}

export default BookController;
