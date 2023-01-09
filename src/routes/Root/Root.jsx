import { useState } from "react";
import { Card } from "../../components/Card/Card";
import data from "../../constants/products.json";
import styles from './Root.module.css';

export const Root = () => {
  const [productsInCart, setProductsInCart] = useState([]);
  const [resetCard, setResetCard] = useState(false);

  const handleCartChange = (action, product) => {
    if (action === "add") {
      setProductsInCart([...productsInCart, product]);
    } else {
      setProductsInCart(productsInCart.filter((p) => p.id !== product.id));
    }
  };

  const handleClick = () => {
    let total=0;
    productsInCart.forEach((product) => {
      total += product.price;
    })
    console.log('total is', total);
    alert(`Total is ${total}`)
    setProductsInCart([]);
    setResetCard(!resetCard);
  }

  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>Products</h1>
      <div className={styles.grid}>
        {data.list.map((product) => (
          <Card
            key={product.id}
            product={product}
            handleCartChange={handleCartChange}
            resetCard={resetCard}
          />
        ))}
      </div>
      <button className={styles.checkoutBtn} type="button" onClick={handleClick}>Checkout</button>
    </div>
  );
};
