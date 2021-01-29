import React, { useEffect, useState } from "react";
import "./Product.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";

import ProductType from "../types/Product";

const convertToReal = (value: number): string => {
  const dolar = value.toFixed(2).toString();
  const real = "R$ " + dolar.replace(".", ",");
  return real;
};

type FavoriteType = {
  id: number;
};

const getFavorites = () => {
  const localFavorites = localStorage.getItem("favorites") || "[]";
  const favorites: Array<FavoriteType> = JSON.parse(localFavorites);
  return favorites;
};

type ProductProps = {
  product: ProductType;
};

const Product: React.FC<ProductProps> = ({ product }) => {
  let favorites: Array<FavoriteType> = [];

  const localProduct: FavoriteType = { id: product._id };
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    favorites = getFavorites();

    if (favorite) {
      const index = favorites.findIndex(
        (favProd) => favProd.id === localProduct.id
      );
      favorites.splice(index, 1);
    } else {
      favorites.push(localProduct);
    }

    setFavorite(!favorite);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  useEffect(() => {
    favorites = getFavorites();
    const isFavorite = favorites.find((favorite) => {
      return favorite.id === localProduct.id;
    });
    setFavorite(Boolean(isFavorite));
  }, []);

  return (
    <div className="product">
      <div className="product-image">
        <img src={product.image} alt="" />
      </div>

      <div className="product-info">
        <div className="product-info-header">
          <h2 className="product-title">
            {product.name || "Camisas Brooklyn 1986"}
          </h2>
        </div>

        <button className="product-button">
          <span className="product-price">
            {convertToReal(product.price) || "R$ 99,99"}
          </span>
          <span className="product-button-text">
            COMPRAR
            <HiOutlineChevronRight />
          </span>
        </button>
      </div>

      <div
        className={
          favorite
            ? "product-favorite-button favorite"
            : "product-favorite-button"
        }
        onClick={toggleFavorite}
      >
        {favorite ? <FaHeart /> : <FaRegHeart />}
      </div>
    </div>
  );
};

export default Product;
