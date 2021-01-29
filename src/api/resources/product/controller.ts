import ProductType from "../../../types/Product";
import ProductModel from "./model";

class ProductController {
  async getAll(filter = {}, projection: any = null, options = {}) {
    const products: Array<ProductType> = await ProductModel.find(
      filter,
      projection,
      options
    );
    return products;
  }
}

export default new ProductController();
