import mongoose from "mongoose";
import ProductSchema from "./schema";

const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;
