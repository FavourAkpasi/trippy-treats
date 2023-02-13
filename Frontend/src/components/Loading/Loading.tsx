import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <section className="loading">
      <h2>Our Signature Treats</h2>
      <img src="/images/loading.gif" alt="loading" />
      {/* <div className="product-container">
        {productData.map((product) => (
          <div className="product" key={product.id}>
            <FavoriteBorderIcon className="heart" />
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
      </div> */}
    </section>
  );
};

export default Loading;
