import { useState } from "react";
import { Card } from "../../components/Card/Card";
import data from "../../constants/products.json";

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
    setProductsInCart([]);
    setResetCard(!resetCard);
  }

  return (
    <>
      <div>
        {data.list.map((product) => (
          <Card
            key={product.id}
            product={product}
            handleCartChange={handleCartChange}
            resetCard={resetCard}
          />
        ))}
      </div>
      <button type="button" onClick={handleClick}>Checkout</button>
    </>
  );
};
