import React, { useState } from "react";
import "./Favorites.css";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { productData } from "../../Data";

const Favorites = () => {
  const [infoClicked, setInfoClicked] = useState(false);

  function handleInfoClick(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    e.stopPropagation;
    setInfoClicked(!infoClicked);
    // console.log({ infoClicked });
  }

  return (
    <section className="favorites">
      <h2>Customer's Favourites</h2>
      <div className="product-container">
        {productData.map((product) => (
          <div className="product" key={product.id}>
            {infoClicked && (
              <div className="product-info">
                <div>INFO: {product.info}</div>
                <div>TOPPINGS: {product.toppings}</div>
              </div>
            )}
            <FavoriteBorderIcon className="heart" />
            <InfoOutlinedIcon
              className="info"
              onClick={(e) => handleInfoClick(e)}
            />
            <img src={product.img} alt={product.name} width="70%" />
            <div className="description">
              <div>
                <p>{product.price} </p>
                <h4>{product.name}</h4>
              </div>
              <div>
                <Button size="small" variant="contained" color="success">
                  BUY
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favorites;
