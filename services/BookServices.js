class BookService {
  constructor() {
    this.books = [];
  }

  async createBook({ code, title, author }) {

    const existingBook = this.books.find(book => book.code === code);
    if (existingBook) {
      throw new Error("Ya existe un libro con el mismo código");
    }


    const newBook = { code, title, author, status: "disponible" };
    this.books.push(newBook); 
    return newBook;
  }

  async deleteBook(code) {

    if (this.books.length === 0) {
      throw new Error("No hay libros para eliminar");
    }

    const index = this.books.findIndex(book => book.code === code);
    if (index !== -1) {
      const deletedBook = this.books.splice(index, 1)[0];
      return deletedBook;
    } else {
      throw new Error("Libro no encontrado");
    }
  }

  async rentBook(code) {
    const book = this.books.find(book => book.code === code);
    if (!book) {
      throw new Error("Libro no encontrado");
    }

    if (book.status !== "disponible") {
      throw new Error("El libro no está disponible para alquilar");
    }

    book.status = "alquilado";
    return book;
  }

  async returnBook(code) {
    const book = this.books.find(book => book.code === code);
    if (!book) {
      throw new Error("Libro no encontrado");
    }

    if (book.status !== "alquilado") {
      throw new Error("El libro no está actualmente alquilado");
    }

    book.status = "disponible";
    return book;
  }

  async markBookAsUnsuitable(code) {
    const book = this.books.find(book => book.code === code);
    if (!book) {
      throw new Error("Libro no encontrado");
    }

    book.status = "no-apto";
    return book;
  }

  async getAllBooks() {
    return this.books;
  }

  async getBooksByStatus(status) {
    return this.books.filter(book => book.status === status);
  }
}

export default BookService;
