export enum ProductTags {
  NEW_RELEASE = "new_release",
  SALE = "sale",
}

type ProductType = {
  _id: number;
  name: string;
  image: string;
  price: number;
  highlight?: boolean;
  tags: Array<ProductTags>;
};

export default ProductType;
