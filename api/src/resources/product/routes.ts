import express from "express";
import ProductController from "./controller";

const router = express.Router();

router.get("/", ProductController.getAll);

export default router;
