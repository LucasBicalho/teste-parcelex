import React, { useState } from "react";
import "./Slider.css";

import ProductType from "../types/Product";

type SliderProps = {
  products: Array<ProductType>;
};

const Slider: React.FC<SliderProps> = ({ products }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === products.length - 1 ? 0 : current + 1);
  };

  const timer = setTimeout(nextSlide, 5000);

  const handleClickStatus = (index: number) => {
    clearTimeout(timer);
    setCurrent(index);
  };

  return (
    <section className="slider">
      <div className="slider-container">
        {products.map((product, index) => {
          return (
            <div
              className={
                index === current
                  ? "slider-image-container active"
                  : "slider-image-container"
              }
              key={index}
            >
              {index === current && (
                <img
                  src={product.image}
                  alt="imagem"
                  className="slider-image"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="slider-status">
        {products.map((_, index) => (
          <div
            key={index}
            className={
              index === current
                ? "slider-status-button active"
                : "slider-status-button"
            }
            onClick={() => handleClickStatus(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
