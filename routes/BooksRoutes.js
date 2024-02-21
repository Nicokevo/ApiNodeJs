import express from "express";
import BookController from "../controllers/BookController.js";
import { notFound } from "../midlewares/notFound.js"; 
import { errorandler } from "../midlewares/notFound.js"; 

const router = express.Router();
const bookController = new BookController(bookService);

router.post("/", bookController.createBook);
router.get("/", bookController.getAllBooks);
router.delete("/:code", bookController.deleteBook);
router.post("/alquilar/:code", bookController.rentBook);
router.post("/devolver/:code", bookController.returnBook);
router.post("/marcar-no-apto/:code", bookController.markBookAsUnsuitable);
router.get("/estado/:estado", bookController.listBooksByStatus);
router.post("/verificar-premio/:code", bookController.checkPrizeOnRent);


router.use(notFound);

router.use(errorHandler);

export default router;
