import express from "express";
import { SERVER_PORT, MODE } from "./config/config.js";
import bookRoutes from './routes/BooksRoutes.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", bookRoutes);

app.listen(SERVER_PORT, () => {
  console.log("Servidor en marcha");
});

