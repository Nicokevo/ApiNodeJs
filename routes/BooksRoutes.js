import express from "express";
import BookController from "../controllers/BookController"; 

const router = express.Router();
const bookController = new BookController();

router.post("/", bookController.createBook);
router.get("/", bookController.getAllBooks);
router.delete("/:code", bookController.deleteBook);
router.post("/alquilar/:code", bookController.rentBook);
router.post("/devolver/:code", bookController.returnBook);
router.post("/marcar-no-apto/:code", bookController.markBookAsUnsuitable);
router.get("/estado/:estado", bookController.listBooksByStatus);
router.post("/verificar-premio/:code", bookController.checkPrizeOnRent);

export default router;
