import express from "express";
import ProductController from "./controller";

const ProductRouter = express.Router();

ProductRouter.get("/", ProductController.getAll);

export default ProductRouter;
