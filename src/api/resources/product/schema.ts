import { Schema } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  highlight: Boolean,
  tags: { type: [String], default: [] },
});

export default ProductSchema;
