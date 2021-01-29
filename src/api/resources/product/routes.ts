import express, { Request, Response } from "express";
import httpStatus from "http-status";
import ProductController from "./controller";

const ProductRouter = express.Router();

ProductRouter.get("/products", async (request: Request, response: Response) => {
  const { filter, projection, options } = request.query;

  const filterString = filter ? filter.toString() : "{}";
  const projectionString = projection ? projection.toString() : "";
  const optionsString = options ? options.toString() : "{}";

  const productFilter = JSON.parse(filterString);
  const productProjection = projectionString ? projectionString : null;
  const productOptions = JSON.parse(optionsString);

  const products = await ProductController.getAll(
    productFilter,
    productProjection,
    productOptions
  );
  return response.status(httpStatus.OK).json(products);
});

export default ProductRouter;
