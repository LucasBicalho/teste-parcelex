import { Request, Response } from "express";
import httpStatus from "http-status";

import ProductModel from "./model";

class ProductController {
  async getAll(request: Request, response: Response) {
    const { limit } = request.query;
    let filter = limit ? { $limit: limit } : {};
    const products = await ProductModel.find(filter);
    return response.status(httpStatus.OK).json({ products });
  }
}

export default new ProductController();
