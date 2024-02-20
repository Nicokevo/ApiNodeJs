class BookService {
    constructor() {
      this.books = [];
    }
  

    async createBook({ code, title, author }) {
      const newBook = { code, title, author, status: "disponible" };
      this.books.push(newBook); 
      return newBook;
    }
  
   
    async deleteBook(code) {
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
      if (book && book.status === "disponible") {
        book.status = "alquilado";
        return book;
      } else {
        throw new Error("El libro no está disponible para alquilar");
      }
    }
  
 
    async returnBook(code) {
      const book = this.books.find(book => book.code === code);
      if (book && book.status === "alquilado") {
        book.status = "disponible";
        return book;
      } else {
        throw new Error("El libro no está actualmente alquilado");
      }
    }
  

    async markBookAsUnsuitable(code) {
      const book = this.books.find(book => book.code === code);
      if (book) {
        book.status = "no-apto";
        return book;
      } else {
        throw new Error("Libro no encontrado");
      }
    }
  

    async getAllBooks() {
      return this.books;
    }
  

    async getBooksByStatus(status) {
      return this.books.filter(book => book.status === status);
    }
  }
  
  export default BookService;
  