import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
// import blackForest from '../../assets/'
// import brownie from '../../assets/brownie.jpg'
// import chocolavaCake from '../../assets/choco-lava-cake.jpg'
// import newyorkCheesecake from '../../assets/newyork-cheescake.jpg'

export const Card = ({ product, handleCartChange, resetCard }) => {
  const [addToCart, setAddToCart] = useState(true);

  useEffect(() => {
    setAddToCart(true);
  },[resetCard])

  const handleClick = (action, product) => {
    setAddToCart(!addToCart);
    handleCartChange(action,product);
  }

  return (
    <div className={styles.card}>
      <img className={styles.thumbnail} alt='thumbnail' src={process.env.PUBLIC_URL + '/assets/' + product.image} />
      <h1>{product.name}</h1>
      <span>{product.description}</span>
      <span>Price: {product.price}</span>
      {addToCart ? (
        <button type="button" onClick={() => handleClick('add', product)}>Add to Cart</button>
      ) : (
        <button type="button" onClick={() => handleClick('remove', product)}>Remove From Cart</button>
      )}
    </div>
  );
};
